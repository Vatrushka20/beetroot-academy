const swiper = new Swiper('.first-screen', {
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


new Swiper(".new-arrivals", {
    // loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320:{
            slidesPerView: 1,
            centeredSlides: false,
            effect: false,
        },
        425: {
            slidesPerView: 1,
            centeredSlides: false,
            effect: false,
        },
        768: {
            slidesPerView: 3,
            effect: false,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});

new Swiper(".partners", {
    // loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
    },
    slidesPerView: 9,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 6,
        },
        1000: {
            slidesPerView: 9,
        },
    },
});



const navigation = document.querySelector('#list');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('is-active');
    hamburger.classList.toggle('is-active')
});

