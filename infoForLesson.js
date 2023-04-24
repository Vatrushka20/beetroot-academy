// створення масивів

// let arr = new Array(); // використовується рідко
// let array = [];

// значення масиву

let arrOne = [
    'me',
    'you',
    'we',
];

console.log(arrOne[0]);
console.log(arrOne[1]);
console.log(arrOne[2]);

//-- інший варіант запису
let arrayOne = ['me', 'you', 'we'];

console.log(arrayOne[0]);
console.log(arrayOne[1]);
console.log(arrayOne[2]);


// різні типи значень
let arrTwo = [
    "Nastya",
    {
        type: "JS",
        age: 26,
    },
    true,
    function () {
        console.log('Привіт, я Настя');
    }
];

console.log(arrTwo);
console.log(arrTwo[0]);
console.log(arrTwo[1].type); // викликаємо обʼєкт
console.log(arrTwo[2]);
arrTwo[3]();  // викликаємо функцію з масиву

// Багатовимірні масиви
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
console.log(matrix[0][1]);
console.log(matrix[2][2]);


//========================================================================================================================================================

// Довжина масиву. Властивість length

let arrThree = ['1', '2', '3'];
console.log(arrThree);
console.log(arrThree.length);

arrThree.length = 0;
console.log(arrThree);

// Таким чином, найпростіший спосіб
// очистити масив – це arrOne.length = 0;


//========================================================================================================================================================

// Доступ до масиву
/*
Нагадаю що масив є об'єктом і, отже,
поводиться як об'єкт. Наприклад, копіюється за посиланням:
*/

let arrFour = ['4', '5', '6'];
console.log(arrFour);

let newArr = arrFour;
newArr.length = 2;
console.log(newArr);


//========================================================================================================================================================

// Зміна значень
let arrFive = ['7', '8', '9'];

// Змінюємо наявне

arrFive[0] = '10';
console.log(arrFive);

// Додаємо нове значення

arrFive[3] = '11';
console.log(arrFive);


//========================================================================================================================================================

// МЕТОДИ МАСИВІВ

/* Варіанти застосування для масивів.

Перший з них це "черга" або впорядкована колекція елементів.
Черга підтримує два види операцій:
1. додавання елемента в кінець черги
2. видалення елемента на початку, зсуваючи чергу, так що другий елемент стає першим.

Інший варіант застосування для масивів - структура даних, називається "стек".
Стек підтримує два види операцій:
1. додавання елемента в кінець
2. видалення останнього елемента

Масиви в JavaScript можуть працювати і як черга, і як стек.
Ми можемо додавати/видаляти елементи як на початок, так і в кінець масиву.
І в цьому нам допоможуть такі методи:
*/

// Метод push - додає елемент у кінець масиву

let arrayTwo = ['12', '13', '14'];
console.log(arrayTwo);

arrayTwo.push('15');
console.log(arrayTwo);

arrayTwo.push('16', '17');
console.log(arrayTwo);


// Метод shift - видаляє елемент на початку,
// так що другий елемент стає першим.

let arrayThree = ['18', '19', '20'];
arrayThree.shift()
console.log(arrayThree);


// Метод pop - видаляє останній елемент

let arrayFour = ['21', '22', '23'];
arrayFour.pop();
console.log(arrayFour)


// Метод unshift - додає елемент на початок масиву

let arrayFive = ['24', '25', '26'];
arrayFive.unshift('28');

console.log(arrayFive);

arrayFive.unshift('29', '30');
console.log(arrayFive);

/*
Методи push/pop виконуються швидко, а методи shift/unshift - повільно.

На прикладі додавання елемента
на початок масиву (unshift);

Просто взяти й додати елемент із номером 0 недостатньо.
Потрібно також заново пронумерувати інші елементи.

Операція unshift повинна виконати 3 дії:
1. Додати елемент з індексом 0.
2. Зсунути всі елементи вправо, заново пронумерувати їх, замінивши 0 на 1, 1 на 2 і т.д.
3. Оновити властивість length.
Чим більше елементів містить масив, тим більше
часу буде потрібно для того, щоб їх перемістити, більше операцій з пам'яттю.

А ось що б додати елемент у кінець масиву (метод push)
не потрібно нічого переміщати.
Так само не потрібно заново нумерувати елементи. Достатньо
збільшити значення length.
*/


//========================================================================================================================================================

// Видалення/додавання/зміна конкретних елементів

let arrayNew = ['01', '02', '03'];

delete arrayNew[0];
console.log(arrayNew);
// Не використовуємо, бо залишається під нього місце. length не змінюється




// // Метод splice. Дозволяє додавати, видаляти та замінювати елементи.
// // Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

// Видаляємо
let newArray = ['Nastya', 'Ivan', 'Oleksandr', '1', '2'];
// Починаючи з першої позиції (Ivan), видаляємо один елемент
newArray.splice(1, 2); // перше значення - це з якого елемента починаємо
console.log(newArray) // друге значення - це скільки елементів видалити починаючи з start
//  в цьому прикладі ми почали з першого елемента (Ivan),
//  та разом із ним видалили 2 елементи це(Ivan та Oleksandr).


// Видаляємо елемент і повертаємо його в змінну
let newArrayOne = ['Nastya', 'Ivan', 'Oleksandr', '1', '2'];
let removed = newArrayOne.splice(0, 1);
console.log(removed) // видалили значення з масиву, та закинули його у змінну.


// Замінюємо елементи
let newArrayTwo = ['Nastya', 'Ivan', 'Slava',];
newArrayTwo.splice(1, 2, 'Lu', 'Oleksandr');
console.log(newArrayTwo);
//  в цьому прикладі ми почали з першого елемента (Ivan),
//  та разом із ним видалили 2 елементи це(Ivan та Slava) та замінюємо на інші (Lu, Oleksandr)


//Додаємо елементи
let newArrayThree = ['Nastya', 'Ivan', 'Slava',];
newArrayThree.splice(0, 0, 'Lu', 'Oleksandr');
console.log(newArrayThree);
//  в цьому прикладі ми почали з нульового елемента (Nastya), тобто перед ним
// та вказавши в deleteCount - 0, це не видаляє елементи, а додає (Lu, Oleksandr)


//// Видаляємо елемент
let newArrayFour = ['1', '2', '3'];
newArrayFour.splice(-1, 1);
console.log(newArrayFour)
// коли вказуємо відʼємний start(перше значення) тоді відлік з кінця


//========================================================================================================================================================

// Метод slice.
// Створює новий масив, у який копіює частину або весь масив
// Синтаксис arr.slice([start], [end]) Не включаючи [end]. Тобто копіюється від старта до енда, але без енд

// Копіюємо частину масиву
let someArray = ['01', '02', '03'];
console.log(someArray)

// Починаючи з 0-ї позиції '01',
// до 2-ї позиції '03' (не включаючи)
someArrayOne = someArray.slice(0, 2);
console.log(someArrayOne)

//// Починаючи з останньої позиції '01',
// // до останньої '03' (не включаючи)
someArrayTwo = someArray.slice(-3, -1);
console.log(someArrayTwo);

// Копіюємо весь масив
let someArrayTree = someArray.slice();
console.log(someArrayTree);


//--------------------------------------------------------------

/*
// Метод concat.

// Створює новий масив, у який копіює дані з інших масивів
// і додаткові значення (у кінець масиву)
// Синтаксис arr.concat(arg1, arg2...)
 */
let anotherArr = ['apple', 'banana', 'orange'];
let anotherArrOne = anotherArr.concat('cherry');
console.log(anotherArrOne)


//========================================================================================================================================================

// Пошук у масиві

// Методи indexOf/lastIndexOf і includes

// аналоги рядковим методам
/*
1. arr.indexOf(item, from) шукає item, починаючи з індексу from,
	і повертає індекс, на якому було знайдено шуканий
	елемент, в іншому випадку - 1.
2. arr.lastIndexOf(item, from) - те саме, але шукає справа наліво.
3. arr.includes(item, from) - шукає item, починаючи з індексу from,
	і повертає true, якщо пошук успішний.
*/


let arrForSearch = ['potato', 'carrot', 'pepper',];

//indexOf
console.log(arrForSearch.indexOf('potato'));
console.log(arrForSearch.indexOf('bread'));
console.log(arrForSearch.indexOf('carrot', 1));

//includes
console.log(arrForSearch.includes('pepper'));
console.log(arrForSearch.includes('bread'));
console.log(arrForSearch.includes('pepper', 0));


//------------------------

// find и findIndex
// пошук у масиві об'єктів із граничною умовою

/*
// Синтаксис
let result = arr.find(function(item, index, array) {
 // якщо true - повертається поточний елемент і перебір переривається
  // якщо всі ітерації виявилися хибними, повертається undefined
item - це кожен елемент в масиві
index - це його ключ, позиція
array - це сам масив
});
*/

let objectsInArr = [
    {name: 'Nastya', age: 26},
    {name: 'Lu', age: 1},
    {name: 'Oleksandr', age: 26},
]

// --------find---------
let result = objectsInArr.find(function (item, index, array) {
    return item.age === 26;
});

// короткий варіант запису
// let result = objectsInArr.find(item => item.age === 26);
console.log(result);


// ----------findIndex--------
// повертає індекс, а не те що там записано
let resultTwo = objectsInArr.findIndex(item => item.age === 26);
console.log(resultTwo)


// -------filter------
// Метод шукає всі елементи, на яких функція-колбек поверне true.
/*
let results = arr.filter(function (item, index, array) {
	// якщо true - елемент додається до результату, і перебір триває
	// повертається порожній масив у разі, якщо нічого не знайдено
item - це кожен елемент в масиві
index - це його ключ, позиція
array - це сам масив
});
*/
let resultThree = objectsInArr.filter(item => item.age >= 18);
// let resultThree = objectsInArr.filter(function (item, index, array) {
//     return item.age >= 18;
// });
console.log(resultThree)


//========================================================================================================================================================

// -------Сортування масивів---------

// Метод sort(fn)
// сортує масив на місці, змінюючи в ньому порядок елементів

// Сортування слів
let arrForSort = ['mother', 'father', 'son', 'cat'];
console.log(arrForSort.sort());

// Сортування чисел
let arrForSortTwo = [8, 22, 1, 2, 11];
console.log(arrForSortTwo.sort());
// За замовчуванням елементи сортуються як рядки.
// Для рядків застосовується лексикографічний порядок,
// і дійсно виходить, що "8" > "22".
console.log("8" > "22");

// тому використовуємо для чисел інший варіант


// Функція сортування

// function compareNumeric(a, b) {
//     console.log(`Порівнюємо ${a} та ${b}`);
//     // if (a > b) return 1;
//     // if (a === b) return 0;
//     // if (a < b) return -1;
//     return a - b
// }
// console.log(arrForSortTwo.sort(compareNumeric))

// це коротший запис функції зверху
console.log(arrForSortTwo.sort((a, b) => a - b));


//--------
// ще метод сортування
/*
// Метод reverse
// змінює порядок елементів в масиві на зворотній.
 */
let arrForReverse = ['3', '11', '8', '15', '19', '21'];
console.log(arrForReverse.reverse());


//========================================================================================================================================================

// Перетворення масивів

// Метод map.
// викликає функцію для кожного елемента масиву
// і повертає масив результатів виконання цієї функції.
/*
let result = arr.map(function(item, index, array) {
  // повертається нове значення замість елемента
});
item - це кожен елемент в масиві
index - це його ключ, позиція
array - це сам масив
*/

let arrForMap = ['music', 'movie', 'sport', 'cooking'];
//
let resultForMap = arrForMap.map(function (item, index, array) {
    return item[0];
});

// короткий варіант
// let resultForNap = arrForMap.map(item => item[0]);

console.log(arrForMap);
console.log(resultForMap);


//-------------------------------------------------

// МЕТОДИ Split та Join

/*
 Метод split перетворює рядок у
 масив за заданим роздільником
 Синтаксис: str.split(delim)
*/
let strForSplit = 'cat, dog, bird';
console.log(strForSplit);

let arrForSplit = strForSplit.split(',');
console.log(arrForSplit);


// Можна обмежити кількість об'єктів
// які потраплять у масив

let arrForSplitTwo = strForSplit.split(',', 2);
console.log(arrForSplitTwo);


/*
 Метод join перетворює масив у
 рядок із заданим роздільником
 Синтаксис: arr.join(glue)
*/

let arrForJoin = ['table', 'window', 'fridge'];
let strWithJoin = arrForJoin.join(', ');
console.log(strWithJoin);


//// Отримання рядка з масиву через type String
console.log(String(arrForJoin));


//========================================================================================================================================================

// Перевірка Array.isArray()

/*
Нагадаю, масиви не утворюють окремий тип даних.
Вони засновані на об'єктах.
*/

let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);

//як дізнатися що точно масив чи ні

if (Array.isArray(obj)) {
    console.log('Це масив!');
} else {
    console.log('це не масив!');
}

if (Array.isArray(arr)) {
    console.log('Це масив!');
} else {
    console.log('Це не масив!');
}


//========================================================================================================================================================

// Перебір елемента ----через цикли----

let arrNew = ['candy', 'cake', 'chips'];
console.log(arrNew.length);

// Через цикл FOR
for (let i = 0; i < arrNew.length; i++) {
    console.log(arrNew[i]);
}

// Цикл FOR...OF
// Можна використовувати для виведення значень
let arrNewTwo = ['water', 'milk', 'juice'];
for (let arrItem of arrNewTwo) {
    console.log(arrItem)
}


// Перебір елемента -----через метод-----

// Метод перебору forEach
// Виконує функцію для кожного елемента масиву
/*
arr.forEach(function (item, index, array) {
	// ... робити щось з item
});
*/

let arrForEach = ['song', 'book', 'magazine'];

arrForEach.forEach(function (item, index, array) {
    console.log(`${item} знаходиться на ${index} позиції в ${array}`)
});

//Стрілкова функція, те саме, але короткий варіант
arrForEach.forEach((item, index, array) => {
    console.log(`${item} знаходиться на ${index} позиції в ${array}`)
});


// ще варіант з ForEach

let arrForEachTwo = ['song-1', 'book-1', 'magazine-1'];

arrForEachTwo.forEach(show);

function show(item) {
    console.log(`${item}`)
}

// function show(item, index) {
//     console.log(`${item} ${index}`)
// }
// function show(item, index, array) {
//     console.log(`${item} ${index} ${array}`)
// }


//========================================================================================================================================================

// Методи reduce/reduceRight

/*
Отже, ми з'ясували що якщо нам потрібно перебрати
масив - ми можемо використовувати forEach, for або for..of.
Якщо нам потрібно перебрати масив і повернути
дані для кожного елемента - ми використовуємо map.

Методи arr.reduce і arr.reduceRight схожі на ці методи,
але вони трохи складніші і використовуються для обчислення
якого-небудь єдиного значення на основі всього масиву.
*/
/*
// Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
*/
/*
До звичних нам аргументів item, index, array
додається previousValue:

previousValue - результат попереднього виклику цієї функції,
дорівнює initial при першому виклику (якщо передано initial),
item - черговий елемент масиву,
index - його індекс,
array - сам масив.

Функція застосовується по черзі до всіх елементів
масиву і "переносить" свій результат на наступний виклик.
*/

let arrForReduce = [10, 2, 3, 4];
let reduceValueOne = arrForReduce.reduce(function (previousValue, item, index, array) {
    return item + previousValue;
},);
console.log(reduceValueOne)
/*
Крок №1             Крок №2             Крок №3             Крок №4
previousValue = 0   previousValue = 1   previousValue = 3   previousValue = 6
item = 1            item = 2            item = 3            item = 4
їхня сума = 1       їхня сума = 3       їхня сума = 6       їхня сума = 10
*/


//--------

/*
let arrTwo = ['number 1', 'number 2', 'number 3',];
Якщо не вказати початкове значення, то воно дорівнюватиме
першому елементу масиву (previousValue=number 1)
А робота методу почнеться з другого елемента (item=number 2)
*/
let arrReduce = ['song-1', 'book-1', 'magazine-1'];
let reduceValueTwo = arrReduce.reduce(function (previousValue, item, index, array) {
    // console.log(previousValue);
    // console.log(item);
    return `${item} ${previousValue}`;
});
console.log(`${reduceValueTwo}`);

// Метод arr.reduceRight працює аналогічно,
// але проходить по масиву справа наліво.


//========================================================================================================================================================


// Масив використовуємо як масив
/*
Слід пам'ятати, що масив є об'єктом і,
отже, поводиться як об'єкт.
*/
/*
let arr = ['Ваня', 'Іштван', 'Оля',];
console.log(typeof arr);

// Додавання нечислової властивості
arr.name = "Коля";
console.log(arr);
*/
/*
Але те, що дійсно робить масиви особливими - це їхнє внутрішнє
представлення. Движок JavaScript намагається зберігати елементи
масиву в безперервній області пам'яті, один за одним.
Існують й інші способи оптимізації, завдяки яким
масиви працюють дуже швидко.

Але всі вони втратять ефективність, якщо ми перестанемо працювати
з масивом як з "упорядкованою колекцією даних" і почнемо
використовувати його як звичайний об'єкт.

Варіанти неправильного застосування масиву:
1. Додавання нечислової властивості, наприклад: arr.test = 5.
2. Створення "дірок", наприклад: додавання arr[0],
	потім arr[1000] (між ними нічого немає).
3. Заповнення масиву в зворотному порядку, наприклад: arr[1000], arr[999] і т.д.
*/



