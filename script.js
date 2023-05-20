/*1) Реалізуй клас, що описує коло.
У класі повинні бути такі компоненти:
1. поле, що зберігає радіус кола;
2. get-властивість, яке повертає радіус кола;
3. set-властивість, що встановлює радіус кола;
4. get-властивість, яке повертає діаметр кола;
5. метод, що обчислює площу кола;
6. метод, що обчислює довжину кола.
Продемонструй роботу властивостей і методів.

Довжина кола обчислюється за формулою l = 2πr.
Площа круга – S = πr2, де π = 3,14, r – радіус круга.
 */

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get getRadius() {
        return `The radius of the circle is ${this.radius} centimeters.`
    }

    set getRadius(value) {
        [this.radius] = value.split(' ')
    }

    get getDiameter() {
        return `The diameter of the circle is ${2 * this.radius} centimeters.`
    }

    showRadius() {
        console.log(this.getRadius)
    }

    showDiameter() {
        console.log(this.getDiameter)
    }

    calcArea() {
        const area = Math.PI * this.radius ** 2;
        console.log(`The area of the circle is ${Math.round(area)} cm2.`)
    }

    calcLength() {
        const length = 2 * Math.PI * this.radius;
        console.log(`The length of the circle is ${Math.round(length)} cm.`)
    }
}

const circleOne = new Circle('10');
const circleTwo = new Circle('2')
circleOne.showRadius()
circleTwo.showRadius()

circleOne.getRadius = '30';
circleTwo.getRadius = '5';
circleOne.showRadius()
circleTwo.showRadius()

circleOne.showDiameter()
circleTwo.showDiameter()

circleOne.calcArea()
circleTwo.calcArea()

circleOne.calcLength()
circleTwo.calcLength()


/*2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

1. поле, яке зберігає колір маркера;
2. поле, яке зберігає кількість чорнил у маркері (у відсотках);
3. метод для вводу (приймає рядок і виводить текст відповідним кольором;
текст виводиться доти, доки в маркері є чорнило;
один не пробільний символ — це 0,5% чорнил у маркері).
4. Реалізуй клас, що описує маркер, який можна перезаправляти.
Успадкуй цей клас від простого маркера й додай метод для заправки.

Продемонструй роботу написаних методів.
 */

class Marker {
    constructor(color, perCent) {
        this.color = color;
        this.perSent = perCent;
    }

    get infoAboutMarker() {
        return `The color is ${this.color}, the amount of ink in the marker is ${this.perSent}%.`
    }

    showInfo() {
        console.log(this.infoAboutMarker)
    }

    showText(text) {
        let content = document.getElementById('contentFoMarker');
        for (let i = 0; i < text.length; i++) {
            if (this.perSent !== 0) {
                if (text[i] === " ") {
                    this.perSent += 0.5;
                }
                content.innerHTML += text[i];
                content.style.color = this.color;
                this.perSent -= 0.5;
            } else {
                document.write('The marker is empty!');
                break;
            }
        }
    }
}

class RefillMarker extends Marker {
    markerRefill(fill) {
        if (fill > 100) {
            fill = 100;
        } else {
            this.perSent += fill;
        }
    }
}

const redMarker = new RefillMarker('#880808', 50);

redMarker.showInfo()

const someText = `"It was so great to hear from you today and it was such weird timing," he said. "This is going to sound funny and a little strange, but you were in a dream I had just a couple of days ago. I'd love to get together and tell you about it if you're up for a cup of coffee," he continued, laying the trap he'd been planning for years.`;


redMarker.markerRefill(30)
redMarker.showText(someText)
redMarker.showInfo()

redMarker.markerRefill(20)
redMarker.showInfo()

redMarker.markerRefill(30)
redMarker.showInfo()


/*3) Реалізуй клас Employee, що описує працівника, і створи масив
працівників банку.

Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком
працівників банку. Масив працівників необхідно передавати через
конструктор, а отримувати HTML-код за допомогою методу getHtml ().

Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
 */

const employee = document.getElementById('employee');

const table = document.createElement('table');
table.setAttribute('id', 'employee__table');
table.className = 'employee__table';

employee.appendChild(table);

class Employee {
    constructor(name, position, experience, salary) {
        this.name = name;
        this.position = position;
        this.experience = experience;
        this.salary = salary;
    }
}

const workers = [
    new Employee('Lynne Stokes', 'The Bank Teller', 3, 1500),
    new Employee('Dana Whitney', 'The Loan Officer', 2, 1550),
    new Employee('Hallie Brandt', 'The Investment Banker', 4, 2300),
    new Employee('Juliet Berger', 'The Loan Officer', 5, 2300),
    new Employee('Rosemary Flowers', 'The Bank Teller', 1, 1000),
    new Employee('Rosa Holmes', 'The Financial Manager', '3', '3000'),
    new Employee('Janis David', 'The Financial Analyst', '6', '3250'),
    new Employee('Morton Lawson', 'The Bank Manager', '8', '3500'),
    new Employee('Phil Holden', 'The Branch Administrator', '7', '4500'),
    new Employee('Nigel Mccarthy', 'The Bank Teller', '1', '1000'),
];

class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }

    getHtml() {
        const table = document.getElementById('employee__table')
        const array = this.arr;
        const trHead = document.createElement('tr');
        trHead.className = 'trHead';

        const th1 = document.createElement('th');
        th1.textContent = "Name";
        th1.className = 'thHead';

        const th2 = document.createElement('th');
        th2.textContent = "Position";
        th2.className = 'thHead';

        const th3 = document.createElement('th');
        th3.textContent = 'Experience';
        th3.className = 'thHead';

        const th4 = document.createElement('th');
        th4.textContent = 'Salary';
        th4.className = 'thHead';

        trHead.appendChild(th1);
        trHead.appendChild(th2);
        trHead.appendChild(th3);
        trHead.appendChild(th4);
        table.appendChild(trHead)

        for (let i in array) {
            const tr = document.createElement('tr');
            tr.className = 'trAll';
            table.appendChild(tr);
            for (let j in array[i]) {
                const td = document.createElement('td');
                td.textContent = array[i][j];
                td.className = 'td';
                tr.appendChild(td);
            }
        }
    }
}

const tableObject = new EmpTable(workers);
tableObject.getHtml()