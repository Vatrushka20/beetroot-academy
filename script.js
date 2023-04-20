// // // // // // // CLASSWORK // // // // // // // //
// не сильно застосовується в практиці
// const obj = Object.create({}, {
//     name: {
//         value: "Nastya"
//     },
// });
// console.log(obj)


// деструктуризація як Object.assign
//     ...rest оператор,
const person = {
    name: "Nas",
    age: 26,
    'love a cat': true,
};


const address = {
    city: 'Odesa',
    country: 'Ukraine',
}


const person2 = {...person, ...address};
const {name, age, ...anyName} = person2;

console.log(person2);
console.log(anyName);

// anyName це константа варіація, це рест оператор, і він витягує все що є в обʼєкті.


for (const key in person2) {
    console.log(key, person2[key])
}

// перетворюємо обджект в массив
console.log(Object.values(person2));
console.log(Object.keys(person2));
console.log(Object.entries(person2));


// // ////// //////


let myCat = {
    name: 'Lu',
    age: '1 year',
    'breed of cat': 'without breed ',
    color: 'multicolored',
};

let whatSheLikes = {
    food: 'dry food, sometimes - wet food',
    'what she likes': "games: ball, thread",
    'what she doesnt like': 'bathe',
};


let cat = {
    showInfoName() {
        console.log(`Cat name is ${this.name}.`)
    },
    showInfoFood() {
        console.log(`She likes ${this.food}`)
    },
    showInfoColorCat() {
        console.log(`She is ${this.color}`)
    }
}

let fullCat = {...myCat, ...whatSheLikes, ...cat};

console.log(myCat)
console.log(whatSheLikes);
fullCat.showInfoName()
fullCat.showInfoFood()
fullCat.showInfoColorCat()

// fullCat.showInfo.call(cat)


/*----------------------------------HOMEWORK----------------------------------*/


// MIN HOMEWORK
/* 1. Створи об'єкт, що описує автомобіль (виробник, модель,
рік випуску, середня швидкість, обсяг паливного бака,
середня витрата палива на 100 км, водії),
і наступні методи для роботи з цим об'єктом:
1. Метод, який виводить на екран інформацію про автомобіль.
2. Додавання ім’я водія у список.
3. Перевірка водія на наявність його ім’я у списку.
4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані
з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві
необхідно робити перерву на 1 годину.
 */
//
let car = {
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    yearOfRelease: 2019,
    averageSpeed: 160,
    fuelTank: 70,
    averageFuelConsumption: 8,
    drivers: {
        first: 'Ivan',
        second: 'David',
    },
};

let carInfo = {
    showInfoAboutCar() {
        console.log(`
Its ${this.brand}, model ${this.model}.
Release ${this['yearOfRelease']} year.
Average speed is ${this['averageSpeed']} km/h.
Volume of the fuel tank is ${this['fuelTank']} liters.
The average fuel consumption per 100 km is ${this['averageFuelConsumption']} liters.
The first driver is ${this.drivers.first} and the second is ${this.drivers.second}.`)
    },

    newDrivers() {
        return this.drivers.traineeTwo = 'Ivan';
        console.log(this.newDrivers())
    },

    checkDrivers() {
        let keyExist = Object.values(this.drivers.first);
        console.log('first' in this.drivers)
    },

    findFuelConsumption(distance, car) {
        return (distance * car['averageFuelConsumption']) / 100;
    },

    findTimeOfTrip(distance, car) {
        let timeWithoutRest = Math.round(distance / car["averageSpeed"]);
        let countOfResting = this.findCountOfResting(timeWithoutRest);

        return timeWithoutRest + countOfResting;
    },

    findCountOfResting(timeWithoutRest) {
        let timeBetweenResting = 4;
        return Math.floor(timeWithoutRest / timeBetweenResting );
    }

};

car.drivers.traineeOne = 'Vlad';


let distance = Number(prompt(`Please, enter your distance in km`));

fullInfoAboutCar = {...car, ...carInfo};


fullInfoAboutCar.showInfoAboutCar()
fullInfoAboutCar.newDrivers()
fullInfoAboutCar.checkDrivers()

alert(`You need ${fullInfoAboutCar.findFuelConsumption(distance, car)} liters of petrol and ${fullInfoAboutCar.findTimeOfTrip(distance, car)} hours for your journey.`)


// NORMA HOMEWORK
/* 1. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції
для роботи з цим об'єктом:
1. Для виведення часу на екран.
2. Зміни часу на передану кількість секунд.
3. Зміни часу на передану кількість хвилин.
4. Зміни часу на передану кількість годин.
Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу,
може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд,
то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити
можливість того що користувач може передати 150 секунд, або 75 хвилин.
 */
//  1 variant
let time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
};

let timeInfo = {
    showTime() {
        let hoursString = this.hours < 10 ? '0' + this.hours : this.hours;
        let minutesString = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        let secondsString = this.seconds < 10 ? '0' + this.seconds : this.seconds;

        console.log(`Time - ${hoursString}:${minutesString}:${secondsString}`);
    },

    showTimeWithChangesSeconds(seconds) {
        let secondsChanges = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;

        this.hours = Math.floor(secondsChanges / 3600) % 24;
        this.minutes = Math.floor(secondsChanges / 60) % 60;
        this.seconds = secondsChanges % 60;

        this.showTime()
    },

    showTimeWithChangesMinutes(minutes) {
        this.showTimeWithChangesSeconds(minutes * 60);
    },

    showTimeWithChangesHours(hours) {
        this.showTimeWithChangesSeconds(hours * 3600);
    },
}

time.hours = 20;
time.minutes = 59;
time.seconds = 45;


fullTime = {...time, ...timeInfo};

fullTime.showTime();
fullTime.showTimeWithChangesSeconds(3000);
fullTime.showTimeWithChangesMinutes(30);
fullTime.showTimeWithChangesHours(2);



// 2 variant
const day = new Date();
console.log(day)


let changeHours = 100;
let changeMinutes = 100;
let changeSeconds = 100;

function getTimeWithChangedSeconds() {
    let time = new Date(Date.now() + (changeSeconds * 1000));
    console.log(time)
}

getTimeWithChangedSeconds()

function getTimeWithChangedMinutes() {
    let time = new Date(Date.now() + (changeMinutes * 1000) * 60);
    console.log(time)
}

getTimeWithChangedMinutes()

function getTimeWithChangedHours() {
    let time = new Date(Date.now() + (changeHours * 1000) * 3600);
    console.log(time)
}

getTimeWithChangedHours()



// 3 variant
let clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,

    displayTime() {
        let hours = this.hours.toString().padStart(2, '0');
        let minutes = this.minutes.toString().padStart(2, '0');
        let seconds = this.seconds.toString().padStart(2, '0');
        console.log(`${hours}:${minutes}:${seconds}`);
    },

    addSeconds(seconds) {
        let newTime = new Date();
        newTime.setHours(this.hours, this.minutes, this.seconds + seconds);
        this.hours = newTime.getHours();
        this.minutes = newTime.getMinutes();
        this.seconds = newTime.getSeconds();
    },

    addMinutes(minutes) {
        let newTime = new Date();
        newTime.setHours(this.hours, this.minutes + minutes, this.seconds);
        this.hours = newTime.getHours();
        this.minutes = newTime.getMinutes();
        this.seconds = newTime.getSeconds();
    },

    addHours(hours) {
        let newTime = new Date();
        newTime.setHours(this.hours + hours, this.minutes, this.seconds);
        this.hours = newTime.getHours();
        this.minutes = newTime.getMinutes();
        this.seconds = newTime.getSeconds();
    },
};

clock.hours = 20;
clock.minutes = 59;
clock.seconds = 20;


clock.displayTime();

clock.addSeconds(100);
clock.displayTime();

clock.addMinutes(100);
clock.displayTime(100);

clock.addSeconds(100);
clock.displayTime()


// час в цей момент
// let now = new Date();
// console.log(now)

//
// let Feb20_1997 = new Date('1997-02-20');
// console.log(Feb20_1997)
//
// let Apr20_2023 = new Date(2023, 3, 20, 12, 22, 20, 194);
// console.log(Apr20_2023)