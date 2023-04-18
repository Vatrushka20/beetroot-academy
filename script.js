//
// SetTimeout, SetInterval - планування функції.
//
/*
1. SetTimeout - дозволяє викликати функцію один раз черезпевний інтервал часу.
2. SetInterval - дозволяє викликати функцію регулярно,
повторюючи виклик через певний відрізок часу.
setTimeout(функція, затримка, параметр, ...параметр);
setInterval(функція, затримка, параметр, ...параметр);
*/

// function showOther(name, age) {
//     console.log(`Привіт, я - ${name}. Мені - ${age} років!!!`);
// }
//
// setTimeout(showOther, 5000, 'Nastya', 26);
// setInterval(showOther, 1000, 'Nastya', 26);

// Приклад, де ми виконаємо зупинку - break

// let showNumber = (num) => {
//     console.log(num);
//     if (num < 5) {
//         setTimeout(showNumber, 1000, ++num);
//     }
// };
// setTimeout(showNumber, 1000, 1)

// ще спосіб з clearTimeout

// function showNumb(num) {
//     console.log(num);
//     let timeId = setTimeout(showNumb, 1000, ++num);
//     if (num === 6) {
//         clearTimeout(timeId);
//     }
// }
//
// setTimeout(showNumb, 1000, 1)
//
// let result = 0;
//
// function showSmt(num) {
//     result += num;
//     console.log(result);
//     if (result === 10) {
//         clearInterval(timeId);
//     }
// }
// let timeId = setInterval(showSmt, 1000, 1)


// КОЛБЕКИ (функції зворотного виклику)
//
// function askQue(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }
//
// function showOk() {
//     alert(`Ви погодилися.`);
// }
//
// function showCancel() {
//     alert(`Ви скасували`);
// }
//
// askQue(`Ви згодні?`, showOk, showCancel);



// HOMEWORK MIN

// 1. Всі можливі варіанти створення функцій.

// оголошення функції - Function Declaration
function showMessage() {
    console.log(`Привіт`)
}

showMessage()

// функціональний вираз - Function Expression
let calcSuma = function (a, b) {
    return a + b;
};
console.log(calcSuma(1, 2))


// стрілкова функція - arrow function

// однострокова стрілкова функція
let calcNum = (a, b) => a + b;
console.log(calcNum(1, 3))

// багатострокова стрілкова функція
let calcNumber = (a, b) => {
    return a + b;
};
console.log(calcNumber(2, 10))


// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
let arg = (a, b, c, d, e) => {
    console.log(arg.length);
}
arg(1, 2, 3, 4, 5)


/* 3. Напиши функцію, яка приймає 2 числа і повертає:
1. -1, якщо перше число менше, ніж друге;
2.  1 - якщо перше число більше, ніж друге;
3.  0 - якщо числа рівні.
 */
function getNumber(num1, num2) {
    if (num1 < num2) {
        return "-1";
    } else if (num1 > num2) {
        return '1';
    } else {
        return '0';
    }
}

console.log(getNumber(10, 2))


//4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// формула factorial(n)= n * factorial(n − 1)
// рекурсія - коли функція сама себе викликає.
function factorial(number) {
    if (number < 0) {
        return -1;
    } else if (number === 0) {
        return 1;
    } else {
        return (number * factorial(number - 1));
    }
}

console.log(factorial(5));

//  інший спосіб

function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

console.log(factorialize(5))


/* 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
Наприклад: цифри 1, 4, 9 перетворяться в число 149.
 */

let getNum = (a, b, c) => {
    return Number(`${a}${b}${c}`);
};
console.log(getNum(1, 4, 9))


/* 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
 */

function calcSomeArea(a, b) {
    if (b === undefined) {
        return a * a;
    } else {
        return a * b;
    }
}
console.log(calcSomeArea( 6));


// NORMA HOMEWORK

/* 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
 */
//
//
const number = Number(prompt(`Введіть додатнє число:`));

let getPerfectNumber = (number) => {
    let sum = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number && sum !== 0) {
        alert(`Число є досконалим`);
    } else {
        alert(`Число не є досконалим`);
    }
};

getPerfectNumber(number);
//
//
// /* 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
//  */
function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

let perfectNumber = (min, max) => {
    const perfectNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
};

const min = Number(prompt(`Введіть мінімальне значення діапазону`));
const max = Number(prompt(`Введіть мінімальне значення діапазону`));
const perfectNumbers = perfectNumber(min, max);
if (perfectNumbers.length === 0) {
    alert(`У діапазоні від ${min} до ${max} немає досконалих чисел`);
} else {
    alert(`Досконалі числа у діапазоні від ${min} до ${max}: ${perfectNumbers.join(', ')}`);

}
