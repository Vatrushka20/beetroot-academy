// const promise = new Promise((resolve, reject) => {
//
//     resolve('resolve')
//     reject('reject')
// });
//
// promise.then((res) => console.log(res));

// console.log(promise);

const API = 'https://swapi.dev/api/planets/';

fetch(API, {
})
    .then((res) => res.json())
    .then((data) => console.log(data))
