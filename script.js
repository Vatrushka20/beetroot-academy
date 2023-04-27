const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// child.addEventListener('click', (event) => {
//     console.log('child')
// });
// parent.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('parent')
// });
// grandparent.addEventListener('click', (event) => {
//     console.log('grandparent')
// });
//
// child.addEventListener('click', (event) => {
//     console.log('child capture')
// },  { "capture": true });
// child.addEventListener('click', (event) => {
//     console.log('parent capture')
// },  { "capture": true });
// child.addEventListener('click', (event) => {
//     console.log('grandparent capture')
// },  { "capture": true });


// REMOVE

// child.addEventListener('click', (event) => {
//     console.log('child')
// }, {once: true}); //спрацює раз
//
//
// function some(event) {
//     event.stopPropagation()
//     console.log('child');
//     child.removeEventListener('click', some)
// }
//
// child.addEventListener('click', some);


//--------

const divs = document.body.querySelectorAll('div');

// divs.forEach(elem => {
//     child.addEventListener('click', (event) => {
//         event.stopPropagation();
//         console.log('click')
//     })
// });
grandparent.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    console.log(event)
})

//
// const newDiv = document.createElement('div');
// newDiv.classList.add('child');
// document.body.append(newDiv)