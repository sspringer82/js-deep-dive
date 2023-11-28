const person = {
  firstname: 'Klaus',
  lastname: 'Müller',
  age: 42,
};

// const firstname = person.firstname;
// const myLastname = person.lastname;

const { firstname, lastname: myLastname } = person;

// array destructuring

const fruits = ['Apfel', 'Birne', 'Ananas'];

// const apfel = fruits[0];
// const ananas = fruits[2];

const [apfel, , ananas] = fruits;

function getInfo({ firstname, lastname }) {
  console.log(`${firstname} ${lastname}`);
}

// function getInfo(person) {
//   console.log(`${person.firstname} ${person.lastname}`);
// }

// function getInfo(person) {
//   const firstname = person.firstname;
//   const lastname = person.lastname;
//   console.log(`${firstname} ${lastname}`);
// }

getInfo(person);
