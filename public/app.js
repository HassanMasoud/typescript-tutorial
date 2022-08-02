import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Hassan', 'website work', 300);
const invTwo = new Invoice('Tracy', 'marketing work', 500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((invoice) => {
    console.log(invoice.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
