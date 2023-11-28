const value = '123';

if (value === '123') {
  console.log('Der Wert ist 123');
} else if (value === '321') {
  console.log('Der Wert ist 321');
} else {
  console.log('oder doch was anderes');
}

const number = 42;
switch (number) {
  case 1:
    console.log('Wert ist 1');
    break;
  case 42:
    console.log('Wert ist 42');
    break;
  default:
    console.log('Wert ist was anderes');
    break;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let whileIndex = 0;
while (whileIndex < 10) {
  console.log(whileIndex);
  whileIndex++;
}

let doWhileIndex = 0;

do {
  console.log(doWhileIndex);
} while (doWhileIndex++ < 10);

try {
  try {
    console.log('do something');
    throw new Error('Ein Fehler ist aufgetreten');
  } catch (error) {
    console.log('Fehlerbehandlung');
    console.log(error.message);
    throw new Error('oh noo', { cause: error });
  } finally {
    console.log('Aufräumen');
  }
} catch (innerError) {
  console.log(innerError.message);
  console.log(innerError.cause.message);
}

console.log('a');
