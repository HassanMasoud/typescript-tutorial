import { HasFormatter } from './interfaces/HasFormatter.js'
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { ListTemplate } from './classes/ListTemplate.js'

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

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  //tuple
  let values: [string, string, number]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter
  if (type.value === 'invoice') {
    doc = new Invoice(...values)
  } else {
    doc = new Payment(...values)
  }

  list.render(doc, type.value, 'end')
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

//Generics
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return { ...obj, uid }
}

let obj = addUID({ name: 'Hassan', age: 28 })
console.log(obj)

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number
  resourceType: ResourceType
  data: T
}

const docThree: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' },
}

const docFour: Resource<object> = {
  uid: 2,
  resourceType: ResourceType.PERSON,
  data: { name: 'Hassan' },
}

console.log(docThree, docFour)
