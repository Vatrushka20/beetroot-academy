const scrollButton = document.querySelector('.scroll-down');
const aboutUsEl = document.getElementById('aboutUs');

const projectsEl = document.getElementById('projects');
const whatWeDoSection = document.getElementById('what-we-do');


const newsEl = document.getElementById('news');
const latestNewsSection = document.getElementById('latest-news');

const contactEl = document.getElementById('contact');
const formEl = document.getElementById('form')

scrollButton.addEventListener('click', () => {
    whatWeDoSection.scrollIntoView({behavior: 'smooth'});
});
projectsEl.addEventListener('click', () => {
    whatWeDoSection.scrollIntoView({behavior: 'smooth'})
});
newsEl.addEventListener('click', () => {
    latestNewsSection.scrollIntoView({behavior: 'smooth'})
});
contactEl.addEventListener('click', () => {
    formEl.scrollIntoView({behavior: 'smooth'})
})


// BUTTON WHAT WE DO
const btnTrade = document.getElementById('btn-trade');
const btnCommerce = document.getElementById('btn-commerce');
btnTrade.addEventListener('click', () => {
    formEl.scrollIntoView({behavior: 'smooth'})
})
btnCommerce.addEventListener('click', () => {
    formEl.scrollIntoView({behavior: 'smooth'})
})


// FIRST SCREEN SWIPER
new Swiper(".first-screen", {
    loop: true,
    grabCursor: true,
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// LATEST NEWS SLIDER
$(".myCarousel").owlCarousel({
    dotsEach: true,
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        650: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
});


const seeMoreBtn = document.querySelector('#seeMore');
const gallerySeeMore = document.querySelector('#seeGallery');
seeMoreBtn.addEventListener('click', () => {
    gallerySeeMore.classList.toggle('is-active')
})

const gallery = document.querySelector('.gallery__photo')

gallery.addEventListener('click', (e) => {
    const zoom = e.target;
    zoom.classList.toggle('zoomed')
})
gallerySeeMore.addEventListener('click', (e) => {
    const zoom = e.target;
    zoom.classList.toggle('zoomed')
})


// MAP
function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        mapId: "b1583af685b828e5",
        center: {lat: 45.421435630481945, lng: 9.188618978952894},
        zoom: 12,
    });

    new google.maps.Marker({
        position: {lat: 45.46546536187071, lng: 9.187842639715969},
        map,
        icon: {
            url: "assets/map/map-location-icon.svg",
            scaledSize: new google.maps.Size(106, 106)
        }
    });
}


// HAMBURGER

const navEl = document.getElementById('navEl');
const burgerEl = document.getElementById('hamburger');

burgerEl.addEventListener('click', () => {
    burgerEl.classList.toggle('is-active');
    navEl.classList.toggle('is-active')
});
