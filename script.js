// MIN HOMEWORK

/* this is a longer, multi-line comment*/

/*
const mil = 0.621371192;
let km = prompt('Введіть ваші кілометри');
let result = mil * km
alert(`Result - ${result}`);
*/

// a one line comment
// let exampleComment = 10;


// CORRECT

let age = 26;
let myAge26 = 26;
let firstName = "Anastasiya";
let last_name = "Vatrala";
let NUMBER_PI = 3.14;
let COLOR_GRAY = "#808080";

// INCORRECT

/*
let 26 = "my age";
let 26Age = "my age";
let first-name = "Nastya";
let last name = "Vatrala";
let age,name = "26, Anastasiya"
let вік = 26;
*/

//RESERVED

/*
let class = "class";
let function = "function";
let let = 'let';
let return = 'return';
*/




// NORM HOMEWORK


const userName = prompt("Please, enter your name")
alert(`Hi, ${userName}! Have fun!`);


const thisYear = 2023;
const birthYear = prompt("Please, enter your birth year");
const userYear = thisYear - Number(birthYear);
alert(`Your age is ${userYear}!`);


const userLength = prompt("Please, enter the length of the side of the square");
const squarePerimeter = Number(userLength) * 4;
alert(`Your perimeter of the square is ${squarePerimeter}!`);



// MAX


const userRadius = prompt('Please, enter your radius of circle');
// const PI = 3.14;
const circle = Math.PI * Number(userRadius) ** 2;
// const radiusOfCircle = PI * (Number(userRadius) * Number(userRadius)); // ** - дві зірочки піднесення до степеня
alert(`Your radius of circle is ${circle.toFixed(0)}!`);



const userDistance = prompt("Please, enter the distance between the cities (km)");
const userTime = prompt("Please, enter your time (hour)");
const userSpeed = Number(userDistance) / Number(userTime);
alert(`You have to drive at a speed of ${userSpeed}km/hr!`);


const euro = 0.92;
const userUSD = prompt("Please, enter the amount in USD to convert in EUR");
const conversion = Number(userUSD) * euro;
alert(`Your amount is ${conversion} EUR`);

