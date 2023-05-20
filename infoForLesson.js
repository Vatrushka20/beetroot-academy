class Computer {
    constructor(model, year, memory, display, cores) {
        this.model = model;
        this.year = year;
        this.memory = memory;
        this.display = display;
        this.cores = cores;
    }

    get fullInfo() {
        return `Description of the computer: model is ${this.model}. Year is ${this.year}. This computer has ${this.memory} of memory. It has ${this.display} in. and ${this.cores}.`
    }

    set fullInfo(value) {
        [this.model, this.year, this.memory, this.display] = value.split(" ")
    }

    turnOn() {
        console.log(`I turn on the computer ${this.model}.`)
    }

    turnOff() {
        console.log(`You need to turn off the computer ${this.model} ${this.year} year to reboot.`)
    }

    showInfo() {
        console.log(this.fullInfo)
    }
}

const computer = new Computer("MacBook Pro", "2023",
    "512GB", "14 in.", "16 cores");

console.log(computer.model);

computer.turnOn()
computer.turnOff()
computer.showInfo()

computer.fullInfo = 'HP 2022 20 4000';
computer.showInfo()



