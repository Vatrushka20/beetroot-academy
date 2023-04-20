// створення об'єкта

// let userInfo = new Object(); // синтаксис - конструктор обʼєкта

let userInfo2 = {}; // синтаксис - літерал обʼєкта. Частіше використвують

// Властивості обʼєкта. Ключ та значення
// name, age - це ключі
// Nastya, 26 - це значення
let infoUser3 = {
    name: 'Nastya',
    age: 26, /* остання висяча кома, може бути, легше потім міняти місцями
     властивості без помилок, що забув кому */
    'like a cat': true, /* можемо ключам давати назву з декількох слів, але огортати в кавички*/

};

console.log(infoUser3);
console.log(infoUser3.name);
console.log(infoUser3.age);
console.log(infoUser3['like a cat']); /* коли ключ в кавичках, щоб його викликати використовуємо цей спосіб*/


// -----------------------------------------------------------------------------------
// Обчислюване або передаване ім'я

//Обчислюване

let firstPart = "like";
let userInfo = {
    name: 'Nastya',
    age: 26,
    [`${firstPart} a cat`]: true,
};

console.log(userInfo['like a cat']);


// Передане імʼя
let firstPart3 = "like";
let userInfo3 = {
    name: 'Nastya',
    age: 26,
    [firstPart3]: true,
};
console.log(userInfo3[firstPart3]);


// Перевага квадратних дужок при зверненні до ключа
let key = 'name';
console.log(userInfo3[key]);

// через крапку неможливо зврнутися
let key1 = 'name';
console.log(userInfo3.key1); /* undefined, такого імені в обʼєкті не існує */

// Зарезервовані слова можна використовувати в обʼєктах: let, for, if та інші


// -----------------------------------------------------------------------------------
// Тип даних Symbol
// Створюємо символ id з описом (ім'ям) "id"
let id = Symbol('id');
let info = {
    name: 'Nastya',
    age: 26,
    [id]: 'Something some',
};

console.log(info[id]);
/* Основне застосування символів:
 1. "Приховані" властивості об'єктів
Символьна властивість не з'явиться в for..in
2. Використання системних символів
Symbol.iterator, Symbol.toPrimitive тощо.
*/


// -----------------------------------------------------------------------------------
// Вкладеність обʼєктів

let infoAboutUser = {
    name: "Nastya",
    age: 26,
    address: {
        city: 'Odesa',
        street: 'Some',
    }
}
console.log(infoAboutUser);
console.log(infoAboutUser.address);
console.log(infoAboutUser.address.city);


//Властивості зі змінної
// let getFunction = (name, age) => {
//     return {
//         name: name,
//         age: age,
//         //інші властивості
//     };
// }

// трохи спрощений запис того що вище
let getFunction = (name, age) => {
    return {
        name,
        age,
        'like a cat': true,
        //інші властивості
    };
}
let user = getFunction('Nastya', 26);
console.log(user);
console.log(user.name);
console.log(user['like a cat']);


// -----------------------------------------------------------------------------------
// Зміни обʼєктів, їх властивостей

// 1. додавання властивостей
let infoAboutMe = {
    name: 'Nastya',
}
console.log(infoAboutMe);

infoAboutMe.age = 26;
console.log(infoAboutMe);

infoAboutMe['like a cat'] = true;
console.log(infoAboutMe);

infoAboutMe.address = {
    city: 'Odesa',
    street: 'some',
};
console.log(infoAboutMe)

// 2. видалення властивостей - через delete
let infoAboutUser1 = {
    name: "Nastya",
    age: 26,
    address: 'Odesa',
}
console.log(infoAboutUser1);

delete infoAboutUser1.name;
console.log(infoAboutUser1);

delete infoAboutUser1.address;
console.log(infoAboutUser1);

delete infoAboutUser1.age;
console.log(infoAboutUser1);

// 3. зміна властивостей
let some = {
    name: 'you',
    age: 3,
}
console.log(some)

some.name = 'me';
console.log(some)

// 4. зміна властивостей навіть у const
const someYou = {
    name: 'you',
    age: 3,
}
console.log(someYou)

someYou.name = 'me';
console.log(someYou)

/* 4.копіювання обʼєктів у іншу змінну
сам обʼєкт не копіюється / не дублюється, тільки посилання на нього
 */

let someInfo = {
    name: 'Nastya',
    age: 26,
}
console.log(someInfo);

let someInfoUser = someInfo;
console.log(someInfoUser);

someInfoUser.name = 'Olya';
console.log(someInfoUser);


// -----------------------------------------------------------------------------------
/* Дублювання обʼєктів - (Object.assign)
синтаксис - Object.assign(куди(обʼєкт), що(властивість №1), що(власт №2),....);
 */
let userUser = {
    name: 'some',
    age: 26,
}

let justUser = Object.assign({}, userUser);

justUser.age = 20;

console.log(userUser);
console.log(justUser);


// через Object.assign можемо додавати нові властивості
let user2 = {
    name: 'some',
    age: 26,
}
Object.assign(user2, {['like a cat']: true, city: 'Odesa'});
console.log(user2);


// -----------------------------------------------------------------------------------
// Перевірка існування властивості
let userInfo4 = {
    name: "Вася",
    // age: 30,
}
console.log(userInfo4.age);

if (userInfo4.age) { // true или false
    console.log(userInfo4.age);
}

//--------------------
// Опціональний ланцюжок
let userInfo5 = {
    name: "Вася",
    age: 30,
    //address: {
    //	city: "Uzhhorod",
    //	street: "Freedom",
    //}
}
//console.log(userInfo5.address.street);
console.log(userInfo5?.address?.street);

//--------------------
// Оператор 'in'

let user10 = {name: "Іван", age: 30};

console.log("age" in user10); // true, user.age існує
console.log("blabla" in user10);


let userInfo6 = {
    name: 'me',
    age: 26,
    address: {
        city: 'Odesa',
        street: 'some',
    }
}
if ('name' in userInfo6) {
    console.log(userInfo6.name);
}

//У більшості випадків спрацює порівняння з undefined.
//або опціональний ланцюжок ?.
//Але є особливий випадок, коли властивість існує, але містить значення undefined.
//У цьому випадку необхідно використовувати "in".

let userInfo7 = {
    name: undefined,
    // ...наст власт
}
if (userInfo7.name) { // false
    console.log(userInfo.name);
}
if ("name" in userInfo7) { //true
    console.log(userInfo7.name);
}


// -----------------------------------------------------------------------------------
// Цикл «for…in»
/*
// Для перебору всіх властивостей об'єкта використовується цикл for..in.
// Цей цикл відрізняється від вивченого раніше циклу for(;;;).

for (let key in object) {
	// тіло циклу виконується для кожної властивості об'єкта
}
*/

//-----------

let userInfo10 = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    }
}

for (let key in userInfo10) {
    // ключі
    console.log(key); // name, age, address
    // значення ключів
    console.log(userInfo10[key]); // Вася, 30, Object {}
}

for (let key in userInfo10.address) {
    // ключі
    console.log(key); // city, street
    // значення ключів
    console.log(userInfo10.address[key]);
}


// -----------------------------------------------------------------------------------
// Методи обʼєктів

let smth = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    },
    showInfo: function () {
        console.log(`${smth.name}, ${smth.age} років. Адреса: м. ${smth.address.city}, вулиця ${smth.address.street}`);
    }
    /* скорочений варіант
    showInfo() {
        console.log(`${userInfo.name}, ${userInfo.age} лет. Адрес: г.${userInfo.address.city}, ул.${userInfo.address.street}`);
    }
     */
}
smth.showInfo()

// ---------------------------------------------------------------------------------
let smth1 = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    },
    showInfo() {
        // console.log(`${smth1.name}, ${smth1.age} лет. Адрес: г.${smth1.address.city}, ул.${smth1.address.street}`);
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
    }
}
smth.showInfo()


/* let userInfo = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    },
    showInfo() {
        //function show() {
        //	console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
        //}

     // У стрілочної функції немає свого "this" використовуються
        // значення із зовнішнього методу userInfo.showInfo()
        let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
        show();
    }
}
userInfo.showInfo();
*/


// Функція-конструктор

/*
Звичайний синтаксис створення об'єкта{... } дозволяє створити
тільки один об'єкт. Але найчастіше нам потрібно створити безліч
однотипних об'єктів, таких як користувачі, елементи меню тощо.
Це можна зробити за допомогою функції - конструктора й оператора "new".
*/
/*
Функції - конструктори є звичайними функціями.
Але є два правила:
1. ім'я функції - конструктора має починатися з великої літери.
2. Функція - конструктор повинна викликатися за допомогою
	оператора "new".
*/
/*
function UserInfo(name) {

	// this = {}; Створюється порожній об'єкт (неявно)

	this.name = name;
	this.age = 30;

	// return this; Повертається об'єкт (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лєна'));
*/


////////////////////////////////

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty());


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum)