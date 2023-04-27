// console.log(document)

// const ul = document.getElementById('list');
// const ul = document.getElementsByTagName('li');
// const ul = document.querySelector('ul');
//
// const li = ul.querySelectorAll('li')[3];
// li.style.backgroundColor = 'green';
//
// // const manipulate = li.parentElement.style.border = '3px solid red';
// const manipulate = li.lastElementChild;
//
// if(manipulate.length) {
//     Array.from(manipulate).forEach(elem => {
//         elem.style.border = '3px solid red';
//     })
// } else {
//     manipulate.style.border = '3px solid red';
// }
//
// console.log(manipulate)


// додавати

// const div = document.querySelector('div');
//
// const span = document.createElement('span');
// span.innerText = 'some text';
//
// div.append(span);
//
// div.removeChild(div.lastElementChild)
// console.log(div)


// span.append('span text')

// div.before(span)
// // div.after(span)
// div.querySelector('#some').after(span)
// div.children[2].after(span) // краще уникати, бо не завжди щось знпйдемо за тим індексом

// атрибути
// const div = document.querySelector('div');
//
// const span = document.createElement('span');
// span.innerText = 'some text';
//
// const link = div.querySelector('a')
// link.setAttribute('href', 'some');
// link.removeAttribute('href');
// console.log(link);

// dataset
// const div = document.querySelector('div');
//
// const span = document.createElement('span');
// span.innerText = 'some text';
//
// const link = div.querySelector('a')
//
// console.log(JSON.parse(link.dataset.home));
// console.log(link.dataset.home);


// class
// const div = document.querySelector('div');
//
// const span = document.createElement('span');
// span.innerText = 'some text';
//
// const link = div.querySelector('a')
// link.classList.add('warn');
// link.classList.remove('warn');
// // link.classList.toggle('warn', false); // це на клік додає
//
// link.className = 'some';
// console.log(link.className);
//
// function changeClass(params) {
//     link.classList.toggle('warn');
// }  //додивитися


// стилі
//
// const div = document.querySelector('div');
//
// const span = document.createElement('span');
// span.innerText = 'some text';
//
// const link = div.querySelector('a')
// link.style.color = '#2196f3';
// link.style.backgroundColor = 'black';
// link.style.textDecoration= 'none';
// link.style.display = 'block';


// --------------HOMEWORK------------
// 1 завдання

let playList = [
    {
        author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN", song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD", song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE", song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC", song: "BACK IN BLACK"
    },

    {
        author: "QUEEN", song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA", song: "ENTER SANDMAN"
    },
];

const div = document.querySelector('.content');
const h2 = document.querySelector('.title');
h2.style.color = '#051949';
h2.style.paddingBottom = '10px';
h2.style.fontFamily = 'Bruno Ace';

let createContent = ({author, song}) => {
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'play-list');
    ul.style.listStyleType = 'disc';

    const li = document.createElement('li');
    li.setAttribute('class', 'author');
    li.innerText = `${author} - `;
    li.style.color = '#0d2986';
    li.style.fontFamily = 'Bruno Ace'
    li.style.fontSize = '20px';
    li.style.paddingBottom = '10px';


    const span = document.createElement('span');
    span.setAttribute('class', 'song')
    span.innerText = song;
    span.style.color = '#4d69da';
    span.style.fontSize = '16px';

    ul.appendChild(li)
    li.appendChild(span);

    return ul;
}
playList.forEach((item) => div.appendChild(createContent(item)));


// 2 завдання

let modal = document.getElementById('modalWindow');
let openModalWindow = () => modal.style.display = 'block';
let closeModalWindow = () => modal.style.display = 'none';

// window.onclick = function (event) { //close the modal window outside the modal window
//     if(event.target === modal){
//         closeModalWindow()
//     }
// }

// setTimeout(openModalWindow, 3000); // open the modal window after 3 sec


// 3 завдання

let red = document.getElementById('redLight');
let yellow = document.getElementById('yellowLight');
let green = document.getElementById('greenLight');

let changeColor = () => {
    if (red.classList.contains('on')) {
        red.classList.remove('on');
        yellow.classList.add('on');
    } else if (yellow.classList.contains('on')) {
        yellow.classList.remove('on');
        green.classList.add('on');
    } else if (green.classList.contains('on')) {
        green.classList.remove('on');
        red.classList.add('on');
    }
}

