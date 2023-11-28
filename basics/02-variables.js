const value = '123'; // konstante! - global, module, closure, function, block
let value2 = '123'; // variable!  - global, module, closure, function, block
var value3 = '123'; // VERALTETE variable - global, module, closure, function

// scopes! - Gültigkeitsbereiche von JavaScript Variablen
// global - finger weg!
// module - Gültigkeitsbereich in einer Datei
// closure - Funktionsscope + erstellender Context
// function - Funktion
// block - von { bis }

// Immer const nutzen bis der Wert tatsächlich verändert werden muss!

// primitive types - by value!
const number = 42;
// number = 43; // TypeError: Assignment to constant variable.

let string = 'Hallo Welt';
string = 'Hallo Sonne';
console.log(string);

// composite types - by reference

const o = {
  // die Referenz auf das Objekt ist konstant, nicht das Objekt selbst!
  name: 'Klaus',
};

o.name = 'Lisa';
console.log(o);
