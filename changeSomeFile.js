// DOM
// Зміни документа
// Вміст елемента innerHTML

// Отримуємо обʼєкт

const textElem = document.querySelector('.text');

// Отримуємо вміст обʼєкта 'як є' разом з HTML
const textElementContent = textElem.innerHTML;
console.log(textElementContent);

// Перезаписуємо вміст обʼєкта
textElem.innerHTML = `а зараз це малий текст`;

// Дописуємо вміст обʼєкта
textElem.innerHTML = `<p>${textElementContent}</p> <p>Їж, пий, гуляй та
<span>іноді спи</span> у вільний час</p>`;
console.log(textElem.innerHTML);

// ------------------

// Вміст елемента повністю outerHTML

// Отримуємо вміст обʼєкта 'як є' разом з HTML, а також сам елемент
const textElemContent = textElem.outerHTML;
console.log(textElemContent);
// Змінюємо документ
// textElem.outerHTML = `<p>Приклад змін</p>`;
// console.log(textElem.outerHTML)


// ----------------
// Просто текст елемента textContent
const textContent = textElem.textContent;
console.log(textContent)
/*
Записує textContent - ʼбезпечним методомʼ
 */

textElem.textContent = `<p>Їж, пий, гуляй та
<span>іноді спи</span> у вільний час</p>`;
console.log(textElem.textContent);
/*
Ми не хочемо, щоб на сайті зʼявився довільний HTML-код
Присвоєння через textContent - один з варіантів від цього захиститися
 */


//----------------------------
// data
// Вміст текстового вузла/коментаря

const getComment = textElem.nextSibling;
console.log(getComment);
console.log(getComment.data)

// Зміна текстового вузла/коментаря

getComment.data = 'привіт';
console.log(getComment.data)

//----------------------------

// Методи створювання елементів та вузлів

// Створення нового елемента(тегу)
// const newElem = document.createElement('div');
// console.log(newElem)
// Наповнюємо новий елемент
// newElem.innerHTML = `Їж, пий, гуляй та
// <span>іноді спи</span> у вільний час`;
// console.log(newElem);

// Щоб створити новий текстовий вузол
const newText = document.createTextNode('Я Світ');
console.log(newText)
// Створенні обʼєкти знаходяться в константах,
// але не являються частиною документа


// --------------------------------
// МЕТОДИ ВСТАВКИ

// Створення нового елемента(тегу)
const newElem = document.createElement('div');

// Наповнюємо новий елемент
newElem.innerHTML = `Їж, пий, гуляй та
<span>іноді спи</span> у вільний час`;

// Вставляємо новий елемент
// ...перед обʼєктом
textElem.before(newElem, 'привіт');
// ...після обʼєкта
// textElem.after(newElem);
// ...всередину та в начало обʼєкта
// textElem.prepend(newElem);
// ...всередину та в кінець обʼєкта
// textElem.append(newElem);

// ------------

// insertAdjacentHTML/Text/Element

// Вставляємо текст, HTML, елемент

textElem.insertAdjacentHTML(
    'afterend',
    `<p>Їж, пий, гуляй та
        <span>іноді спи</span> у вільний час</p>`
);

// beforebegin - вставити HTML безпосередньо перед textElem
// afterbegin - вставити HTML на початку textElem
// beforeend - вставити HTML в кінець textElem
// afterend - вставити HTML безпосередньо після textElem

// -------
// insertAdjacentText та insertAdjacentElement

textElem.insertAdjacentText('beforeend',
    `Їж, пий, гуляй`
);

// Створюємо новий елемент
const newEl = document.createElement('div');
// Наповнюємо
newEl.innerHTML = 'Щось для прикладу';
// Вставляємо елемент
textElem.insertAdjacentElement(
    'afterbegin',
    newEl
)
