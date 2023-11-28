function User(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

User.prototype.getFullname = function () {
  return `${this.firstname} ${this.lastname}`;
};

const klaus = new User('Klaus', 'Müller');
console.log(klaus.getFullname());

class Person {
  constructor(name) {
    this.name = name;
  }
}
const pete = new Person('Pete');

Person.prototype.greet = function () {
  console.log('Hello ' + this.name);
};

pete.greet();

const name = 'Basti';
console.log(name.toUpperCase());
String.prototype.doSomething = function () {
  console.log('did something');
  return 'foo';
};

name.doSomething();

const myPetsName = 'Kitti';
myPetsName.doSomething();

String.prototype.toUpperCase = function () {
  console.log('overwrite function');
  return this;
};

console.log(name.toUpperCase());

delete String.prototype.toUpperCase;

// 'Hallo'.toUpperCase();
