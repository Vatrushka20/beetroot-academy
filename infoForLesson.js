fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game', {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2bec211ed3mshec8d237787199dfp1b1385jsn03f661867155',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
})
    .then(r => r.json())
    .then(data => console.log(data))








// const promise = new Promise((resolve, reject) => {
//     resolve('resolve')
//     reject('reject')
// });
//
// promise.then((res) => console.log(res));

// console.log(promise);
//
// const API = 'https://swapi.dev/api/planets/';
//
// const getData = (url) => {
//     return fetch(url)
//         .then((res) => res.json())
//         .then((data) => data);
// }
//
// const renderPlanets = (planets) => {
//     planets.forEach(element => {
//         const div = document.createElement('div');
//         div.innerText = element.name;
//         document.body.appendChild(div)
//     })
// }
//
// const displayPlanets = async () => {
//     let planets = [];
//     let url = API;
//     while (url) {
//         const data = await getData(url);
//         url = data.next;
//         console.log(url)
//         planets = [...planets, ...data.results];
//     }
//     renderPlanets(planets)
// };
//
// displayPlanets();


// function* generator() {
//     yield 1;
//     yield 2;
//     return 3;
// }
//
// const res = generator();
//
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// const API = 'https://jsonplaceholder.typicode.com/posts';
// const post = document.querySelector('.post')
// const getData = (url) => {
//     return fetch(API)
//         .then((res) => res.json())
//         .then((data) => data);
// }
//
// const createPostElements = (post) => {
//     const link = document.createElement('a');
//     link.href = './posts.html?id=' + post.id;
//     link.classList.add('card');
//     link.classList.add('w-25');
//
//     const div = document.createElement('div');
//     div.classList.add('card-body');
//
//     const h5 = document.createElement('h5');
//     h5.classList.add('card-title');
//     h5.innerText = post.title;
//
//     const p = document.createElement('p');
//     p.classList.add('card-text');
//     p.innerText = post.body;
//
//     div.appendChild(h5);
//     div.appendChild(p);
//     link.appendChild(div);
//
//     return link;
// }
//
// const showPosts = async () => {
//     const data = await getData(API + 'posts');
//     console.log(data);
//     data.forEach(element => {
//         post.appendChild(createPostElements(element))
//     });
//     return post;
// }
//
// showPosts();
