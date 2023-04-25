// DOM
// Навігація по документу

const htmlElement = document.documentElement;
const headElement = document.head;
// const bodyElement = document.body;
console.log(htmlElement)
console.log(headElement)
// console.log(bodyElement)


// Працюємо з body

// Отримуємо елемент body
const bodyElement = document.body;

// Перший та останній дочірні елементи body
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;
console.log(firstChildNode)
console.log(lastChildNode)

// Колекція має список всіх дітей, включаючи текстові вузли
const childNodes = bodyElement.childNodes;
console.log(childNodes);

// Для перевірки наявності дочірніх вузлів, є спеціальна функція hasChildNodes()
console.log(bodyElement.hasChildNodes());

/*
childNodes в консолі схожий на масив, але це не так
Це колекція - особливий масив, що перебирається - псевдомасив

Відмінності від масиву:
1. Для перебору колекції ми використовуємо for...of
2. Методи масивів не будуть працювати, бо це не масив
 */

// Перебір колекції
for (let node of childNodes) {
    console.log(node); // покаже всі вузли з колекції
}

// Сусідні та батьківські вузли
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;

console.log(previousSiblingNode)
console.log(nextSiblingNode)
console.log(parentNode)


//------Навігація тільки по елементах

/*
Навігаційні властивості написані вище, належать до всіх вузлів в документі.
До прикладу, в childNodes знаходяться і текстові, і вузли-елементи,
і вузли-коментарі, якщо вони є

Але для більшості задач текстові вузли та вузли-коментарі непотрібні.
Ми хочемо маніпулювати вузлами-елементами, які являються тегами
та формують структуру сторінки
 */

// Отримуємо колекцію всіх дочірніх елементів
// Містить тільки теги
const bodyChildren = bodyElement.children;
console.log(bodyChildren)

// Отримуємо перший та останній дочірні елементи
const firstChild = bodyElement.firstElementChild;
const lastChild = bodyElement.lastElementChild;
console.log(firstChild)
console.log(lastChild)

// Отримуємо сусідні та батьківські елементи
const previousSibling = bodyElement.previousElementSibling;
const nextSibling = bodyElement.nextElementSibling;
const parentElement = bodyElement.parentElement;
console.log(previousSibling)
console.log(nextSibling)
console.log(parentElement)


// ------------------------------------------------

// ПОШУК ДОВІЛЬНОГО ЕЛЕМЕНТА
// elem.querySelectorAll(CSS);
/*
    Найуніверсальніший метод пошуку, він повертає всі елементи всередині elem,
    який задовільняє даному СSS-селектору.
 */

//  Пошук по селектору класу
const elementsOne = document.querySelectorAll('.header');
console.log(elementsOne)

// Пошук по селектору тегу
const elementsTwo = document.querySelectorAll('li');
console.log(elementsTwo)

// Пошук по змішаному селектору тегу та класу
const elementsThree = document.querySelectorAll('div.block-two');
console.log(elementsThree)

// Пошук по тегу першого рівня вкладеності
const elementsFour = document.querySelectorAll('.nav-list>li');
console.log(elementsFour)

// Пошук по декількох класах
const elementsSix = document.querySelectorAll('.header, .nav-list');
console.log(elementsSix)

// Пошук по вкладених класах
const elementsSeven = document.querySelectorAll('.block .btn');
console.log(elementsSeven);

// Пошук по ID
const elementsEihgt = document.querySelectorAll('#list');
console.log(elementsEihgt)

// Пошук по атрибуту
const elementsNine = document.querySelectorAll('[href]');
console.log(elementsNine)

// // Пошук по атрибуту зі значенням
const elementsTen = document.querySelectorAll('[href="/pricing"]');
console.log(elementsTen)

// ---------
// querySelectorAll - це статична колекція
// Отримання конкретного елемента колекції
const elems = document.querySelectorAll('li');
console.log(elems[2]);

for (const item of elems) {
    console.log(item)
}

// Можна шукати не тільки в документі, але й константах також
const subList = document.querySelectorAll('.block');
const subItem = subList[0].querySelectorAll('ul, li');
console.log(subItem)


//----------------------------------------------------
// elem.querySelector(CSS)
/*
Повертає перший елемент всередині elem, який відповідає даному СSS-селектору.
 */

// const navList = document.querySelectorAll('.nav-list')[0];
const navList = document.querySelector('.nav-list');
console.log(navList)

// --------------------------

// Інші варіанти пошуку довільного елементу
//document.getElementById(ID) та elem.getElementsBy*

//document.getElementById(ID)
const elemID = document.getElementById('list');
console.log(elemID)


//elem.getElementsBy*
const elemsByTagName = document.getElementsByTagName('li');
console.log(elemsByTagName)

const elemsByName = document.getElementsByName('some')
console.log(elemsByName)

const elemsByClassName = document.getElementsByClassName('block')
console.log(elemsByClassName)



// --------------------------------------------------------
