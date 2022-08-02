class Invoice {
  client: string
  details: string
  amount: number

  constructor(c: string, d: string, a: number) {
    this.client = c
    this.details = d
    this.amount = a
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('Hassan', 'website work', 300)
const invTwo = new Invoice('Tracy', 'marketing work', 500)

console.log(invOne, invTwo)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach((invoice) => {
  console.log(invoice.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})
