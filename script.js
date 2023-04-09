// MIN HOMEWORK


let numberOne = 0.1;
let numberTwo = 0.2;
let result = numberOne + numberTwo;

console.log(result.toFixed(1));

//

let string = "1";
let number = 2;
let result2 = Number(string) + number;

console.log(result2)

//

const oneFile = 820;
const memoryOfFlashcard = prompt('Please, enter your flashcard memory in GB?');
let resultOfFiles = (Number(memoryOfFlashcard) * 1024) / oneFile;

console.log(resultOfFiles.toFixed(0));
alert(`You can add ${resultOfFiles.toFixed(0)} files of 820MG for each!`);




// NORMA HOMEWORK


const userAmount = prompt("Please, enter your money for chocolate");
const chocolate = prompt("Please, enter the price of one chocolate");
let resultOfChocolate = Math.floor(Number(userAmount) / Number(chocolate));
let balance = Number(userAmount) - (Number(chocolate) * resultOfChocolate);

alert(`You can buy ${resultOfChocolate} chocolate! `);
alert(`Your balance is ${balance} UAH!`)

//

let numUser = Number(prompt('Please, enter your number!'));
let reverse = 0;
let lastNum;

while (numUser !== 0) {
    lastNum = numUser % 10;
    reverse = reverse * 10 + lastNum;
    numUser = Math.floor(numUser / 10);
}
alert(`Your reverse number is ${reverse}!`);




// MAX HOMEWORK


const depositAmount = Number(prompt('Please, enter your amount for deposit!'));
let depositPerCent = 0.05;

let resulOfDeposit = (1 + depositPerCent/12) ** 2 * depositAmount;
let justPerCentOfDeposit = resulOfDeposit - depositAmount;

alert(`Your per cent of deposit money for 2 month is ${justPerCentOfDeposit.toFixed(2)} UAH!`);

//

let res1 = 2 && 0 && 3; // 0 false, because one of them false.
let res2 = 2 || 0 || 3; // 2 true , because the first true.
let res3 = 2 && 0 || 3; // 3 true, 2 && 0 -> 0 false, but 0 || 3 -> true;

console.log(res1)
console.log(res2)
console.log(res3)



