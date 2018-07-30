class Animal {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHi (): string {
        console.log(`My name is ${this.name}`)
        return `My name is ${this.name}`;
    }
}

const animal = new Animal('shine');

animal.sayHi();

animal.name

class Dog extends Animal {

    public name;

    constructor(name) {
        super(name);
    }

    // sayHi (): string {
    //     console.log(`My dog name is ${this.name}`)
    //     return `My dog name is ${this.name}`;
    // }
}

const dog = new Dog('🐶');

dog.sayHi();


abstract class Animal1 {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat extends Animal1 {
    public eat() {
        console.log(`${this.name} is eating.`);
    }

    sayHi () {

    }
}

let cat = new Cat('Tom');

cat.eat()