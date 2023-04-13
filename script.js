// MIN HOMEWORK

// 1

const age = prompt('Please, enter your age?');
let result;
if (age >= 0 && age <= 11) {
    result = "You are child!"
} else if (age >= 12 && age <= 17) {
    result = "You are teenager!"
} else if (age >= 18 && age <= 59) {
    result = "You are adult!"
} else if (age >= 60) {
    result = "You are senior!"
} else {
    result = "You entered incorrect information"
}

alert(result);



// 2

const userSymbol = prompt("Please, enter a number between 0 and 9");
let resultSymbol;
//
switch (userSymbol) {
    case '0':
        resultSymbol = ")";
        break;
    case '1':
        resultSymbol = "!";
        break;
    case '2':
        resultSymbol = "@";
        break;
    case '3':
        resultSymbol = "#";
        break;
    case '4':
        resultSymbol = "$";
        break;
    case '5':
        resultSymbol = "%";
        break;
    case '6':
        resultSymbol = "^";
        break;
    case '7':
        resultSymbol = "&";
        break;
    case '8':
        resultSymbol = "*";
        break;
    case '9':
        resultSymbol = "(";
        break;
    default:
        resultSymbol = "You entered incorrect number!!!"
}

alert(`Your symbol is " ${resultSymbol} "`);
//
// //SHORT FORM IF ELSE
//
const symbol = prompt("Please, enter a number between 0 and 9");

symbol === '0'
    ? resultSymbol = ')'
    : symbol === '1'
        ? resultSymbol = '!'
        : symbol === '2'
            ? resultSymbol = "@"
            : symbol === '3'
                ? resultSymbol = "#"
                : symbol === '4'
                    ? resultSymbol = "$"
                    : symbol === '5'
                        ? resultSymbol = "%"
                        : symbol === '6'
                            ? resultSymbol = "^"
                            : symbol === '7'
                                ? resultSymbol = "&"
                                : symbol === '8'
                                    ? resultSymbol = "*"
                                    : symbol === '9'
                                        ? resultSymbol = "("
                                        : resultSymbol = "You entered incorrect symbol"
alert(`Your symbol is " ${resultSymbol} "`)
//


// 3
//
let start = Number(prompt("Введіть початкове число"));
let end = Number(prompt("Введіть кінцеве число"));
let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}
alert(`Сума чисел від ${start} до ${end} дорівнює ${sum}`)
//

// 4
//
let firstNum = Number(prompt('Введіть перше число'));
let secondNum = Number(prompt('Введіть друге число'));
let minNum = Math.min(firstNum, secondNum);
let gcd = 1;
for (let i = 2; i <= minNum; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
        gcd = i;
    }
}
alert(`Найбільший спільний дільник числа ${firstNum} та ${secondNum} є - ${gcd}.`)
//


// 5
//
let num = Number(prompt("Введіть позитивне число:"));
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
       alert(`Дільник введенного вами числа ${num} є ${i}`)
    }
}
// цикл for використовую для переходу від 1 до числа введенного користувачем
// оператор % використовую щоб переконатися що 'num' точно ділиться на число 'i'
// у кожній ітерації перевіряється умова if чи ділиться 'num' на 'i'
// якщо так то те число 'i' відображається.
//


// NORMA HOMEWORK

// 1
//
let numPalindrom = (prompt("Введіть пʼятизначне число (приклад: 55555)"));
if (numPalindrom.length === 5 && numPalindrom[0] === numPalindrom[4]
    && numPalindrom[1] === numPalindrom[3]) {
    alert(`Число ${numPalindrom} є паліндромом`);
} else {
    alert(`Число ${numPalindrom} не є паліндромом`)
}
/* умова яка послідновно перевіряє цифру за цифрою, конкретно тут 1 цифру з 5 цифрою,
 та 2 цифру з 4 цифрою, а 3 є спільною */

// 2
//
let amount = Number(prompt("Please, enter your amount"));
let resultAmount;
if (amount >= 200 && amount <= 300) {
    resultAmount = amount - (amount * 0.03);
} else if (amount > 300 && amount <= 500) {
    resultAmount = amount - (amount * 0.05);
} else if (amount > 500) {
    resultAmount = amount - (amount * 0.07);
} else {
    resultAmount = "incorrect!"
}

alert(`Your amount with a discount is ${resultAmount}!!!`)


// 3
// ініциалізуємо змінні для підрахунку
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

// Запитуємо 10 чисел через цикл
for (let index = 1; index <= 10; index++) {
    let numCount = Number(prompt(`Введіть число № ${index}`));
    if (isNaN(numCount)) {
        alert(`Введіть число`);
        index--; // зменшуємо лічильник щоб ввів ще раз
        continue;
    }

    if (numCount > 0) {
        positiveCount++;
    } else if (numCount < 0) {
        negativeCount++;
    } else if (numCount === 0) {
        zeroCount++;
    }

    if (numCount % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

alert(`Статистика данних:
Додатніх чисел: ${positiveCount}
Від’ємних чисел: ${negativeCount}
Нулів: ${zeroCount}
Парних: ${evenCount}
Непарних: ${oddCount}
`)


// 4

let daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четверг",
    "Пʼятниця", "Субота", "Неділя"];
let i = 0;
let answer = "";

do {
    answer = prompt(`${daysOfWeek[i]}. Хочеш побачити наступний день? Тисни ОК, якщо хочеш побачити наступний день тижня або відміна для завершення`);
    i++;
    if (i === daysOfWeek.length) {
        i = 0;
    }
} while (answer !== null);


// MAX HOMEWORK

//1
//
let min = 0;
let max = 100;
let resultNumber;

while (true) {
    resultNumber = Math.floor((min + max) / 2);
    let answer = prompt(`Загадайте число від 0 до 100. Ваше число >${resultNumber}, <${resultNumber} або ==${resultNumber} (вводьте <, > або ==)`);
    if (answer === ">") {
        min = resultNumber;
    } else if (answer === "<") {
        max = resultNumber;
    } else if (answer === "==") {
        alert(`Я відгадав ваше число це - ${resultNumber}`);
        break;
    } else {
        alert(`Ви ввели невірне число`)
    }
}


// 2
//
let result1;
for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        result1 = i * j;
        document.write(" " + result1 + " ")
    }
    document.write('<br>')
}

// 3

let day;
let month;
let year;
let nextDay;
let nextMonth;
let nextYear;

day = Number(prompt(`Введіть день (від 1 до 31)`));
month = Number(prompt(`Введіть місяць (від 1 до 12)`));
year = Number(prompt(`Введіть рік`));

// дізнаємось чи дата останній день місяця

let lastDayOfMonth = false;

if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        lastDayOfMonth = day === 29;
    } else if ([4, 6, 9, 11].includes(month)) {
        lastDayOfMonth = day === 30;
    } else {
        lastDayOfMonth = day === 31;
    }
}

if (lastDayOfMonth) {
    nextDay = 1;
    if (month === 12) {
        nextMonth = 1;
        nextYear = year + 1;
    } else {
        nextMonth = month + 1;
        nextYear = year + 1;
    }
} else {
    nextDay = day + 1;
    nextMonth = month;
    nextYear = year;
}

 alert(`Наступна дата: ${nextDay}.${nextMonth}.${nextYear}`)





