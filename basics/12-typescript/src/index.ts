import User from './user.js';
const klaus = new User('klaus', 'müller');
console.log(klaus.fullname);

let firstname: string;
firstname = 'Otto';
firstname = 'Lydia';
console.log(firstname);

function add(a: number, b: number): number {
  return a + b;
}

function greet(person: User): void {
  console.log(person.fullname);
}

greet(klaus);
