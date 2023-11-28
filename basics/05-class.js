class User {
  #firstname = ''; // private mit # vorne dran
  #lastname = '';
  #age = null;
  static count;

  static createUser(fn, ln, age) {
    return new this(fn, ln, age);
  }

  constructor(firstname, lastname, age = 42) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    this.#age = age;
    User.count += 1;
  }

  get fullname() {
    return this.#getFullname();
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    this.#age = value;
  }

  #getFullname() {
    return `${this.#firstname} ${this.#lastname}`;
  }

  greet() {
    return `Hallo ${this.#getFullname()}`;
  }
}

const klaus = new User('Klaus', 'Müller', 43);

console.log(klaus);
console.log(typeof klaus); // object
console.log(klaus instanceof User); // true

console.log(klaus.greet());
console.log(klaus.fullname);

klaus.age = 14;
console.log(klaus.age);

const lisa = new User('Lisa', 'Meier', 56);
const dieter = User.createUser('Dieter', 'Schmitt', 12);

console.log(User.count);

class SuperUser extends User {
  role = '';
  constructor(firstname, lastname, age, role) {
    super(firstname, lastname, age);
    this.role = role;
  }

  getInfo() {
    return this.fullname + ' ' + this.role;
  }
}

const admin = new SuperUser('admin', 'istrator', 42, 'admin');
console.log(admin.getInfo());
