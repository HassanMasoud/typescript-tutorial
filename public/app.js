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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
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
