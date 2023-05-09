const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=a2736c54ac65184bcafabc3a51de67e3';
const API_URL = BASE_URL + '/discover/movie?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const genres = [
    {"id": 28, "name": "Action"},
    {"id": 12, "name": "Adventure"},
    {"id": 16, "name": "Animation"},
    {"id": 35, "name": "Comedy"},
    {"id": 80, "name": "Crime"},
    {"id": 99, "name": "Documentary"},
    {"id": 18, "name": "Drama"},
    {"id": 10751, "name": "Family"},
    {"id": 14, "name": "Fantasy"},
    {"id": 36, "name": "History"},
    {"id": 27, "name": "Horror"},
    {"id": 10402, "name": "Music"},
    {"id": 9648, "name": "Mystery"},
    {"id": 10749, "name": "Romance"},
    {"id": 878, "name": "Science Fiction"},
    {"id": 10770, "name": "TV Movie"},
    {"id": 53, "name": "Thriller"},
    {"id": 10752, "name": "War"},
    {"id": 37, "name": "Western"}
];

const movieContainer = document.querySelector('.movie-container');
const form = document.querySelector('.form');
const search = document.getElementById('search');
const genresEl = document.querySelector('.genres');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;

let selectGenres = [];

const getGenres = () => {
    genresEl.innerHTML = '';
    genres.forEach(genre => {
        const tag = document.createElement('div');
        tag.classList.add('genre');
        tag.id = genre.id;
        tag.innerText = genre.name;
        tag.addEventListener('click', () => {
            if (selectGenres.length === 0) {
                selectGenres.push(genre.id);
            } else {
                if (selectGenres.includes(genre.id)) {
                    selectGenres.forEach((id, index) => {
                        if (id === genre.id) {
                            selectGenres.splice(index, 1)
                        }
                    })
                } else {
                    selectGenres.push(genre.id)
                }
            }
            console.log(selectGenres);
            getMovie(API_URL + '&with_genres=' + encodeURI(selectGenres.join(',')));
            highlightSelection();
        })
        genresEl.appendChild(tag);
    })
}
getGenres();

const highlightSelection = () => {
    const tags = document.querySelectorAll('.genre');
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    })
    clearButton();
    if (selectGenres.length !== 0) {
        selectGenres.forEach(id => {
            const highlightsTag = document.getElementById(id);
            highlightsTag.classList.add('highlight');
        })
    }
};
const clearButton = () => {
    let clearBtn = document.getElementById('clear');
    if (clearBtn) {
        clearBtn.classList.add('highlight')
    } else {
        let clear = document.createElement('div');
        clear.classList.add('genre', 'highlight');
        clear.id = 'clear';
        clear.innerText = 'CLEAR';
        clear.addEventListener('click', () => {
            selectGenres = [];
            getGenres();
            getMovie(API_URL);
        })
        genresEl.append(clear)
    }

};

const getMovie = (url) => {
    lastUrl = url;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            if (data.results.length !== 0) {
                showMovies(data.results);
                currentPage = data.page;
                nextPage = currentPage + 1;
                prevPage = currentPage - 1;
                totalPages = data.total_pages;

                current.innerText = currentPage;
                if (currentPage <= 1) {
                    prev.classList.add('disabled');
                    next.classList.remove('disabled')
                } else if (currentPage >= totalPages) {
                    prev.classList.remove('disabled');
                    next.classList.add('disabled')
                } else {
                    prev.classList.remove('disabled');
                    next.classList.remove('disabled')
                }

                genresEl.scrollIntoView({behavior: 'smooth'})

            } else {
                movieContainer.innerHTML = `<h1 class="no-results">Movie not found!</>`
            }
        });

};
getMovie(API_URL);

const showMovies = (data) => {
    movieContainer.innerHTML = '';

    data.forEach(movie => {
        const {title, release_date, poster_path, vote_average, overview} = movie;
        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie');
        movieInfo.innerHTML = `
        <img class="movie__img"
         src="${poster_path ? IMG_URL + poster_path : 'https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png'}" alt="image">
            <h4 class="movie__rating ${getColor(vote_average)}">${vote_average}</h4>
            <h4 class="movie__date">${release_date}</h4>
            <h2 class="movie__title">${title}</h2>
            <p class="movie__description">${overview}</p>`

        movieContainer.appendChild(movieInfo);
    })
}

const getColor = (vote) => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchMovie = search.value;
    if (searchMovie) {
        getGenres();
        selectGenres = [];
        getMovie(searchURL + '&query=' + searchMovie);

    } else {
        getMovie(API_URL);
    }
})

prev.addEventListener('click', () => {
    if (prevPage > 0) {
        pageCall(prevPage)
    }
})
next.addEventListener('click', () => {
    if (nextPage <= totalPages) {
        pageCall(nextPage);
    }
})

const pageCall = (page) => {
    let urlSplit = lastUrl.split('?');
    let queryParams = urlSplit[1].split('&');
    let key = queryParams[queryParams.length - 1].split('=');
    if (key[0] !== 'page') {
        let url = lastUrl + '&page=' + page;
        getMovie(url)
    } else {
        key[1] = page.toString();
        let a = key.join('=');
        queryParams[queryParams.length - 1] = a;
        let b = queryParams.join('&');
        let url = urlSplit[0] + '?' + b;
        getMovie(url);
    }
}

