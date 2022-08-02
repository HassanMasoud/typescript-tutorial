"use strict";
// import { Invoice } from './classes/Invoice.js'
const me = {
    name: 'Hassan',
    age: 28,
    speek(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ' + amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
