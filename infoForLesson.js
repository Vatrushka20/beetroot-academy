// функція say це приклад поліморфізму, бо різні значення у дог та кет
//  приватні функції позначаються #
class Animal {
    constructor(name, color, weight) {
        this.name = name;
        this.legs = 4;
        this.color = color;
        this.weight = weight;
    }

    say() {
        throw new Error("Not implemented")
    }

    eat() {
        console.log("I eat!")
    }
}

class Dog extends Animal {
    #someDogProperty;

    constructor(name, color, weight, someDogProperty) {
        super(name, color, weight);
        this.#someDogProperty = someDogProperty;
    }

    say() {
        console.log('Bark')
    }
}

class Cat extends Animal {
    someCatProperty;
    static catProp = 'some';

    constructor(someCatProperty, name, color, weight) {
        super(name, color, weight);
        this.someCatProperty = someCatProperty;
    }

    say() {
        console.log('Meow')
    }

    static someFn() {
        console.log(this.catProp)
    }
}


const dog = new Dog('Barsik', 'Red', 20, 'dog value');
const cat = new Cat('cat value', "Mushka", 'Green', 5);
cat.eat()
dog.eat()
cat.say()
dog.say()

Cat.someFn()
console.log(dog)
console.log(cat)


class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    get getName() {
        return `The name is ${this.name}`
    }

    set changeName(value) {
        [this.name] = value.split(' ')
    }

    set changeRole(value){
        [this.role] = value.split(' ')
    }

    get getRole() {
        const role = `The role of ${this.name} is ${this.role}`;
        console.log(role)
    }

    logIn() {
        console.log(`${this.name} log in to the system`)
    }

    logOut() {
        console.log(`${this.name} log out of the system`)
    }

    showName() {
        console.log(this.getName)
    }
}

class Admin extends User {
    constructor(name, role) {
        super(name, role);
    }

    addUser(){
        const newName = prompt('Please. enter your name')
        const newUser = Object.create(data, {name: newName})
    }

}

const data = [
    {name: 'Petro', role: 'admin'},
    {name: 'Ivan', role: 'user'},
    {name: 'Anastasiya', role: 'user'},
    {name: 'Oleksandr', role: 'admin'}
].map(({name, role}) => new Admin(name, role));

data.forEach(worker => worker.showName())

data.forEach(user => user.getRole)
data.forEach(user => user.logIn())

data[1].logIn()
data[0].logIn()

data.forEach(user => user.logOut())

data[1].changeName = 'IVAN';
data[1].showName()

data[0].changeRole = 'user';
data[0].getRole
