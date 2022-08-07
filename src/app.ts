import { HasFormatter } from './interfaces/HasFormatter.js'
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('Hassan', 'web work', 300)
docTwo = new Payment('Tracy', 'marketing', 500)

const docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }
  console.log(doc)
})

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
