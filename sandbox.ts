// const circ = (diameter: number) => {
//   return diameter * Math.PI
// }

// console.log(circ(7.5))

//explicit types
let character: string
let age: number
let isLoggedIn: boolean

let people: string[] = []
people.push('Alice', 'Bob')
console.log(people)

//union types
let mixed: (string | number | boolean)[] = []
mixed.push('Hello')
mixed.push(5)
mixed.push(true)
console.log(mixed)

let uid: string | number
uid = '123'
uid = 123

//objects
let person1: object
person1 = {
  name: 'Charles',
  age: 24,
  job: 'Developer',
}

let person2: {
  name: string
  age: number
  job: string
}
person2 = {
  name: 'Kyle',
  age: 30,
  job: 'Youtuber',
}

console.log(person1, person2)
