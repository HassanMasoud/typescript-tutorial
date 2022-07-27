"use strict";
// const circ = (diameter: number) => {
//   return diameter * Math.PI
// }
// console.log(circ(7.5))
//explicit types
let character;
let age;
let isLoggedIn;
let people = [];
people.push('Alice', 'Bob');
console.log(people);
//union types
let mixed = [];
mixed.push('Hello');
mixed.push(5);
mixed.push(true);
console.log(mixed);
let uid;
uid = '123';
uid = 123;
//objects
let person1;
person1 = {
    name: 'Charles',
    age: 24,
    job: 'Developer',
};
let person2;
person2 = {
    name: 'Kyle',
    age: 30,
    job: 'Youtuber',
};
console.log(person1, person2);
// any type
let years = 25;
console.log(years);
years = true;
console.log(years);
years = 'hello';
console.log(years);
let mixedArray = [];
mixedArray.push('hello');
mixedArray.push(true);
mixedArray.push(34);
console.log(mixedArray);
let object;
object = { name: 'Alice', age: 20 };
object = { name: true, age: 'hello' };
console.log(object);
console.log('from the src folder');
