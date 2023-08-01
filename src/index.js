// const sayHello = require('./lib/sayHello');

//ESM Version
import sayHello from './lib/sayHello';
import { outputLogo } from './lib/outputLogo';
import './styles/main.css';

//some comment
// sayHello();

outputLogo();

class Person {
    constructor(age, name) {
        this.age = age,
        this.name = name
    }
}

const isa = new Person(14, 'Isaias');

console.log(isa);