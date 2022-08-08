import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
let docOne;
let docTwo;
docOne = new Invoice('Hassan', 'web work', 300);
docTwo = new Payment('Tracy', 'marketing', 500);
const docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //tuple
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// const invOne = new Invoice('Hassan', 'website work', 300)
// const invTwo = new Invoice('Tracy', 'marketing work', 500)
// let invoices: Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach((invoice) => {
//   console.log(invoice.format())
// })
// Interfaces
// interface IsPerson {
//   name: string
//   age: number
//   speek(a: string): void
//   spend(a: number): number
// }
// const me: IsPerson = {
//   name: 'Hassan',
//   age: 28,
//   speek(text: string): void {
//     console.log(text)
//   },
//   spend(amount: number): number {
//     console.log('I spent ' + amount)
//     return amount
//   },
// }
// const greetPerson = (person: IsPerson) => {
//   console.log('Hello', person.name)
// }
// greetPerson(me)
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let obj = addUID({ name: 'Hassan', age: 28 });
console.log(obj);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' },
};
const docFour = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: 'Hassan' },
};
console.log(docThree, docFour);
