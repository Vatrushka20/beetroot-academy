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