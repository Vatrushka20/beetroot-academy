const fruits = ["Banana", "Orange", "Apple", "Mango"];
let cars = ['1', '2', '3']

let arr = [...fruits, ...cars];
let fruitsAnother = [...fruits, 'some'];
console.log(fruitsAnother);

const apple = fruits.at(2);
const [, , first] = fruits;  // Деструктуризація як діставати з масиву. з рест оператором
console.log(apple)


console.log(arr.join(' '));


// -------------------------------CLASSWORK-------------------------------
// Задача № 1

// Всі варіанти знизу одне й те саме, але різні способи використання.
// скорочені, через цикл for, forEach


let array = ['milk', 'water', 'juice'];

// let getInfo = (array) => {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }
// getInfo(array);

// array.forEach(function (item, index, array) {
//     console.log(`${item} знаходиться на ${index} позиції в ${array}`)
// });

array.forEach((item, index, array) => {
    console.log(`${item} знаходиться на ${index} позиції в ${array}`)
});

let getInfo = (array) => {
// array.forEach(element => {
//     console.log(element)
// });
    array.forEach((item, index, array) => {
        console.log(`${item} знаходиться на ${index} позиції в ${array}`)
    });
}
getInfo(array);

// ------------------------


// ------------------------
// Задача № 2
// функція яка виводить суму всіх чисел в масиві

let number = [1, 2, 3, 4, 5, 6, 7];
let sum = (array) => array.reduce((total, value) => total + value, 0);
console.log(sum(number))
// нижче довший варіант

// let showSum = (number) => {
//     let sum = number.reduce(function(previousValue, item){
//         return item + previousValue;
//     },);
//     console.log(sum)
// };
//
// showSum(number);

// ------------------------


// ------------------------
// Задача № 3
// функція яка виводить найбільше число в масиві

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//
// let maxNum = (numbers) => {
//     return numbers.reduce(function (max, item) {
//             if (max < item) {
//                 max = item;
//             }
//             return max;
//     });
// }
//
// трохи коротше
// let maxNum = (numbers) => {
//     return numbers.reduce(function (max, item) {
//             return max < item ? item : max;
//     });
// }

// ще трохи коротше
// let maxNum = (numbers) => {
//     return numbers.reduce((max, item) => max < item ? item : max);
// }
//
// та найкоротший
let maxNum = (numbers) => numbers.reduce((max, item) => max < item ? item : max);

console.log(maxNum(numbers))
// ------------------------


// ------------------------
//Задача № 4
// функція яка додає елемент в масив
let someArray = ['potato', 'carrot', 'pepper',];
let newArr = (array, element, index) => {
    array.splice(index, 0, element);
};

newArr(someArray, 'water', 3);
console.log(someArray)


//Задача № 5
// видалити з масиву елемент
let someFruits = ['orange', 'mango', 'banana', 'pepper', 'kiwi'];
let deleteArr = (array, index) => array.splice(index, 1);

deleteArr(someFruits, 3);
console.log(someFruits)


// задача № 6

let name = ['Nastya', 'Ivan', 'Lu', 'Oleksandr'];
let anotherName = ['Nastya', 'Lu', 'David', 'Alex'];

let res = name.concat(anotherName.filter((item) => name.indexOf(item) < 0));
console.log(res)


//---------------------------------HOMEWORK-------------------------------------------

/* ----------Мінімум----------

Створи масив «Список покупок». Кожен елемент масиву є об'єктом,
який містить назву продукту, кількість і куплений він чи ні,
ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
що ще не придбані, а потім - ті, що вже придбали.
2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
 */

let shoppingList = [
    {
        productName: 'tomato',
        numberOfProduct: 5,
        purchase: 'no',
        priceOfOne: 10,
        sum: 50,
    },
    {
        productName: 'orange',
        numberOfProduct: 3,
        purchase: 'yes',
        priceOfOne: 20,
        sum: 60,
    },
    {
        productName: 'potato',
        numberOfProduct: 20,
        purchase: 'yes',
        priceOfOne: 2,
        sum: 40,
    },
    {
        productName: 'banana',
        numberOfProduct: 6,
        purchase: 'no',
        priceOfOne: 13,
        sum: 78,
    },
    {
        productName: 'apple',
        numberOfProduct: 7,
        purchase: 'no',
        priceOfOne: 4,
        sum: 28,
    },
    {
        productName: 'cucumber',
        numberOfProduct: 8,
        purchase: 'yes',
        priceOfOne: 9,
        sum: 72,
    },
]
//1
let showPurchaseYes = (array) => {
    array.forEach(function ({productName, purchase}) {
        if (purchase === 'no') {
            console.log(`Некуплений товар - ${productName}`)
        }
    });
    array.forEach(function ({productName, purchase}) {
        if (purchase === 'yes') {
            console.log(`Куплений товар - ${productName}`)
        }
    });
}
showPurchaseYes(shoppingList);

// 1 інший спосіб
let groupByPurchase = (shoppingList) => {
    let group = shoppingList.reduce((group, product) => {
        let {purchase} = product;
        group[purchase] = group[purchase] ?? [];
        group[purchase].push(product);
        return group;
    }, {});
    console.log(group)
};

groupByPurchase(shoppingList);



//HOMEWORK NORMA
/* Норма
1. Видалення продукту зі списку (видалення повинно проводитися шляхом
 створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім).
2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже
існуючим в списку продуктом, необхідно збільшувати кількість в існуючій
покупці, а не додавати нову. При цьому також повинна змінитися сума,
наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24. */
// ----------

// 1
let newShoppingList = [...shoppingList];
let deleteSomeElement = (array) => array.splice(1, 1);
deleteSomeElement(newShoppingList);
console.log(newShoppingList);


// 2
let shoppingListTwo = [
    {
        productName: 'banana',
        numberOfProduct: 6,
    },
    {
        productName: 'lemon',
        numberOfProduct: 3,
        purchase: 'no',
        priceOfOne: 8,
        sum: 24,
    },
]

let newList = [...shoppingList, ...shoppingListTwo];
console.log(newList)

// ---------- MAX HOMEWORK

/*
1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
2. Підрахунок суми всіх (не) придбаних продуктів.
3. Показання продуктів в залежності від суми, (від більшого до меншого
/ від меншого до більшого, в залежності від параметра функції, який вона приймає)
 */

// 1
let sumOfShoppingList = (array) => array.reduce((total, value) => total + value.numberOfProduct * value.priceOfOne, 0);
console.log(`Сума всіх товарів ${sumOfShoppingList(shoppingList)} грн.`);


// 2
let sumOfNotBought = (array) => {
    let suma = 0;
    return array.reduce(function (total, value) {
        if (value.purchase === 'no') {
            suma = total + value.numberOfProduct * value.priceOfOne;
        }
        return suma;
    }, 0);
}
console.log(`Сума некуплених товарів ${sumOfNotBought(shoppingList)} грн.`)
