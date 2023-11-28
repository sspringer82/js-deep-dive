// primitive types

// ------------ Boolean ------------
const boolean1 = true;
const boolean2 = false;

console.log('Boolean: ', typeof boolean1);

// ------------ Number ------------
const n1 = 123;
const n2 = 3.14;
console.log(0.1 + 0.2); // achtung bei fließkomma-Operationen
console.log(Number.MAX_SAFE_INTEGER); // größtmögliche Ganzahl
const n3 = 3e14;
const n4 = 0b101; // binär
// const n5 = 0123; // oktalzahl
const n6 = 123; // dezimal
const n7 = 0x123af; // hexadezimalzahlen
const n8 = 1_000_000; // numeric separator
const n9 = 0xff_00_ff;

const nResult = 16 % 3;

// ------------ BigInt ------------
const bi1 = BigInt(42);
console.log(typeof bi1); // bigint
const biResult = 42n + bi1;

// ------------ String ------------
const s1 = 'Hallo "Welt"';
const s2 = "Hallo 'Welt'";
const name = 'Welt';
const s3 = `Hallo ${name}`; // Template Strings: Variablen Ersetzung, Mehrzeilig, Template Function
console.log(s3);

const s4 = 'Hallo ' + 'Welt';
console.log(s4);

const s5 = 'Hallo Welt';
console.log(s5.toUpperCase());

console.log('includes welt', s5.includes('Welt'));

// ------------ leere typen ------------
const e1 = undefined; // gehört der engine - nicht selbst zuweisen
const e2 = null; // gehört dir!

// ------------ symbol ------------
const sym = Symbol();
console.log(sym);
console.log(Symbol.iterator);
const sym2 = Symbol('My fancy symbol');
console.log(sym2);

// composite types
// primitive types === by value, composite types === by reference

const o = {
  firstname: 'Klaus',
  lastname: 'Müller',
  age: 42,
  getFullName() {
    return this.firstname + ' ' + this.lastname;
  },
};

console.log(o.getFullName());
o.firstname = 'Lisa';
console.log(o.firstname);

const property = 'age';
console.log(o.property); // undefined
console.log(o[property]); // variabler eigenschaftszugriff => 42 o.age
console.log(typeof o);

const arr = [1, 2, 3];
console.log(arr);
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // ist ein Objekt ein Array

arr[0] = 'one';
console.log(arr[0]);

arr[100] = '100';
console.log(arr[100]);
console.log(arr);

// Arrays sind lückenlos, numerisch indexiert, beginnen bei 0

const persons = [
  { id: 1, name: 'Klaus', age: 15 },
  { id: 2, name: 'Maria', age: 20 },
];

console.log(persons.map((person) => person.age));

const ageSum = persons
  .map((person) => person.age)
  .reduce((prev, curr) => prev + curr, 0);
console.log(ageSum);

const zehner = new Array(10).fill(null); // new Array erzeugt ein "leeres" array mit n-Elementen, über die nicht iteriert werden kann - deswegen zuerst füllen!
console.log(zehner);

console.log('xxx');
zehner.forEach((element, index) => {
  zehner[index] = index + 1;
});
console.log(zehner);

console.log('Zehner Länge: ', zehner.length);

for (let i = 0; i < zehner.length; i++) {
  console.log(zehner[i]);
}
