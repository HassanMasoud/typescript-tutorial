// const circ = (diameter: number) => {
//   return diameter * Math.PI
// }

// console.log(circ(7.5))

//explicit types
// let character: string
// let age: number
// let isLoggedIn: boolean

// let people: string[] = []
// people.push('Alice', 'Bob')
// console.log(people)

//union types
// let mixed: (string | number | boolean)[] = []
// mixed.push('Hello')
// mixed.push(5)
// mixed.push(true)
// console.log(mixed)

// let uid: string | number
// uid = '123'
// uid = 123

//objects
// let person1: object
// person1 = {
//   name: 'Charles',
//   age: 24,
//   job: 'Developer',
// }

// let person2: {
//   name: string
//   age: number
//   job: string
// }
// person2 = {
//   name: 'Kyle',
//   age: 30,
//   job: 'Youtuber',
// }

// console.log(person1, person2)

// any type
// let years: any = 25
// console.log(years)
// years = true
// console.log(years)
// years = 'hello'
// console.log(years)

// let mixedArray: any[] = []
// mixedArray.push('hello')
// mixedArray.push(true)
// mixedArray.push(34)
// console.log(mixedArray)

// let object: { name: any; age: any }
// object = { name: 'Alice', age: 20 }
// object = { name: true, age: 'hello' }
// console.log(object)

// console.log('from the src folder')

// let greet: Function

// greet = () => {
//   console.log('Hello, world')
// }

// let add = (a: number, b: number, c: number | string = 10): void => {
//   console.log(a + b)
//   console.log(c)
// }

// add(5, 10, '20')

// let minus = (a: number, b: number): number => {
//   return a - b
// }

// let result = minus(10, 7)
// console.log(result)

//Type aliases
// type strOrNum = string | number
// type objWithName = { name: string; uid: strOrNum }

// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello!`)
// }

// greet({ name: 'Hassan', uid: 1 })

//Function signatures
// let greet: (a: string, b: string) => void
// greet = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`)
// }

// let calc: (a: number, b: number, c: string) => number
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === 'add') {
//     return numOne + numTwo
//   } else {
//     return numOne - numTwo
//   }
// }

// type person = { name: string; age: number }
// let logDetails: (obj: person) => void
// logDetails = (human: person) => {
//   console.log(`The human called ${human.name} is ${human.age}`)
// }

// logDetails({ name: 'Alex', age: 23 })
