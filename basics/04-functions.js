console.log(add(2, 2)); // benannte Funktionen kann man vor ihrer definition nutzen - bitte nicht tun!

// benannte Funktion
function add(a, b) {
  return a + b;
}

const result = add(1, 2);

console.log(result);

// anonyme Funktionen
// console.log(sub(4, 2)); sub noch nicht initialisiert!
const sub = function (a, b) {
  return a - b;
};
console.log(sub(4, 2));

let value = 'asdf';
// IIFE
(function () {
  let value = 'jklö';
  console.log('hello');
  console.log(value);
})();
console.log(value);

// arrow function
const multi = (a, b) => {
  return a * b;
};
console.log(multi(2, 2));

// parameterklammern bei 1 parameter optional
const quadriere = (x) => {
  return x * x;
};
// geschweifte Klammern und return bei nur 1 statement optional
const quadriere2 = (x) => x * x;

// kein eigenes this
// kein Konstruktor

const divide = (a, b) => a / b;

add(1, 2);
sub(3, 1);
divide(6, 2);

// funktionsobjekt
console.log(add);
// funktionsaufruf
console.log(add(1, 2));

function combine(string1, string2) {
  return string1 + string2;
}

console.log(combine('a', 'b')); // richtige anzahl Argumente - OK
console.log(combine('a')); // zu wenige Argumente - mit undefined auffüllen combine('a', undefined)
console.log(combine('a', 'b', 'c')); // zu viele Argumente - werden ignoriert

// arguments bitte nicht mehr nutzen!
function combine2(string1) {
  const myArgs = Array.from(arguments);
  const args = myArgs.reduce((prev, curr) => prev + curr, '');
  return args;
}
console.log(combine2('a', 'b'));

// Rest Operator wandelt die Parameter in ein Array um
function combine3(a, b, ...rest) {
  console.log(rest); // combine3('a', 'b', 'c') - rest = ['c']
}

console.log(combine3('a', 'b', 'c'));

console.log(() => {}); // eine Funktion ohne explizites return gibt immer undefined zurück

// default parameter
function addTo10(a, b = 10) {
  return a + b;
}

console.log(addTo10(1)); // 11
console.log(addTo10(1, 1)); // 2
console.log(addTo10()); // NaN weil undefined + 1

console.log(addTo10(2, undefined)); // 12 weil default parameter bei undefined getriggert werden

function tenToAdd(a = 10, b = a + 2) {
  return a + b;
}

console.log(tenToAdd(undefined, 10)); // 20
console.log(tenToAdd()); // 22

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

function sum2(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}

console.log('sum2: ', sum2(1, 2, 3, 4, 5, 6));

const numbers = new Array(100).fill(0).map((item, index) => index + 1);
console.log(sum2(...numbers)); // spread operator sum2(numbers[0], numbers[1]....)
console.log(sum2.apply(null, numbers)); // apply überschreibt das "this" der Funktion und füllt die Parameter mit einem array
console.log(sum2.call(null, numbers[0], numbers[1])); // call überschreibt das "this" der Funktion und wendet die übergebenen Parameter an
console.log(sum2.call(null, ...numbers)); // dasselbe wie apply

// objekte mit spread kopieren
const person = {
  id: 1,
  name: 'Thomas',
  age: 36,
  address: {
    street: '42 main st',
  },
};
const clone = { ...person }; // Achtung: bei Composite values werden nur die Referenzen kopiert!!!
const clone2 = structuredClone(person); // Deep Copy, auch die Referenzen werden geklont

person.age = 42;
person.address.street = 'wall st';

console.log(person);
console.log(clone);
console.log(clone2);
