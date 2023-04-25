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
        productName: 'tomato', numberOfProduct: 5, purchase: false, priceOfOne: 10, sum: 50,
    },
    {
        productName: 'orange', numberOfProduct: 3, purchase: true, priceOfOne: 20, sum: 60,
    },
    {
        productName: 'potato', numberOfProduct: 20, purchase: true, priceOfOne: 2, sum: 40,
    },
    {
        productName: 'banana', numberOfProduct: 6, purchase: false, priceOfOne: 13, sum: 78,
    },
    {
        productName: 'apple', numberOfProduct: 7, purchase: false, priceOfOne: 4, sum: 28,
    },
    {
        productName: 'cucumber', numberOfProduct: 8, purchase: true, priceOfOne: 9, sum: 72,
    },
]

//1 завдання
let showPurchaseYes = (array) => {
    array.forEach(function ({productName, purchase}) {
        if (purchase === false) {
            console.log(`Некуплений товар - ${productName}`)
        }
    });
    array.forEach(function ({productName, purchase}) {
        if (purchase === true) {
            console.log(`Куплений товар - ${productName}`)
        }
    });
}
showPurchaseYes(shoppingList);

// інший спосіб
let displayShoppingList = (list) => {
    list.sort((a, b) => a.purchase - b.purchase);

    list.forEach(item => {
        let status = item.purchase ? "Куплено" : "Не куплено";
        console.log(`${item.productName}: ${status}, ${item.numberOfProduct} шт. по ${item.priceOfOne} грн. за шт. = ${item.sum} грн.`);
    });
}
displayShoppingList(shoppingList);


// 2 завдання

let purchaseItem = (array, itemName) => {
    let item = array.find(item => item.productName === itemName);

    if (item) {
        item.purchase = true;
        console.log(`Куплено ${itemName}`);
    } else {
        console.log(`Помилка. Продукт ${itemName} не знайдено у списку`);
    }
}
purchaseItem(shoppingList, 'tomato');
console.log(shoppingList) // оновлений список, де куплено томати


//HOMEWORK NORMA
/* Норма
1. Видалення продукту зі списку (видалення повинно проводитися шляхом
 створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім).
2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже
існуючим в списку продуктом, необхідно збільшувати кількість в існуючій
покупці, а не додавати нову. При цьому також повинна змінитися сума,
наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24. */
// ----------

// 1 завдання
let newShoppingList = [...shoppingList];
let deleteSomeElement = (array) => array.splice(1, 1);
deleteSomeElement(newShoppingList);
console.log(newShoppingList);

// інший спосіб
let removeItem = (array, itemName) => {
    let newListOfProduct = array.filter(item => item.productName !== itemName);
    console.log(`Видалено ${itemName}`);
    return newListOfProduct;
};
shoppingList = removeItem(shoppingList, 'potato');
console.log(shoppingList)


// 2 завдання
let addItem = (array, itemName, itemNumberOfProduct, itemPriceOfOne) => {
    let item = array.find(item => item.productName === itemName);

    if (item) {
       item.numberOfProduct += itemNumberOfProduct;
       item.sum += itemNumberOfProduct * itemPriceOfOne;
       console.log(`Додано ${itemNumberOfProduct} шт ${itemName}`)
    } else {
        let newItem = {
            productName: itemName,
            numberOfProduct: itemNumberOfProduct,
            purchase: false,
            priceOfOne: itemPriceOfOne,
            sum: itemNumberOfProduct * itemPriceOfOne,
        };
        array.push(newItem);
        console.log(`Додано новий продукт ${itemName}`)
    }
    return array;
}

shoppingList = addItem(shoppingList, 'tomato', 2, 22);
console.log(shoppingList)

// ---------- MAX HOMEWORK

/*
1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
2. Підрахунок суми всіх (не) придбаних продуктів.
3. Показання продуктів в залежності від суми, (від більшого до меншого
/ від меншого до більшого, в залежності від параметра функції, який вона приймає)
 */

// 1 завдання
let sumOfShoppingList = (array) => array.reduce((total, value) => total + value.numberOfProduct * value.priceOfOne, 0);
console.log(`Сума всіх товарів ${sumOfShoppingList(shoppingList)} грн.`);


// 2 завдання
let sumOfNotBought = (array) => {
    let suma = 0;
    return array.reduce(function (total, value) {
        if (value.purchase === false) {
            suma = total + value.numberOfProduct * value.priceOfOne;
        }
        return suma;
    }, 0);
}
console.log(`Сума некуплених товарів ${sumOfNotBought(shoppingList)} грн.`)


// 3 завдання
let sortShoppingList = (array) => {
    console.log(`Сортування продукту в залежності від суми:`)
    array.sort((first, second) => first.sum - second.sum);   // сортує від меншої до більшої
    // array.sort((first, second) => second.sum - first.sum); // сортує від більшої до меншої

    array.forEach((value) => {
        console.log(`Сума ${value.productName} - ${value.sum}`);
    })
}
sortShoppingList(shoppingList)

// інший спосіб
function sortItemsByPrice(items, ascending = true) {
    items.sort((a, b) => {
        if (a.priceOfOne * a.numberOfProduct < b.priceOfOne * b.numberOfProduct) {
            return ascending ? 1 : -1;
        } else if (a.priceOfOne * a.numberOfProduct > b.priceOfOne * b.numberOfProduct) {
            return ascending ? -1 : 1;
        } else {
            return 0;
        }
    });
    return items;
}

// console.log(sortItemsByPrice(shoppingList)); // Виведе список у порядку спадання суми
console.log(sortItemsByPrice(shoppingList, false)); // Виведе список у порядку зростання суми


// ще спосіб
let sortSum = (array) => {
    return array.sort((s1, s2) => s1.sum > s2.sum ? 1 : (s1.sum < s2.sum) ? -1 : 0)
};
console.log(sortSum(shoppingList))



