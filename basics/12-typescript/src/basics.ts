let name: string = 'Klaus';

function add(a: number, b: number): number {
  return a + b;
}

const sub = (a: number, b: number): number => a - b;

const mul: (a: number, b: number) => number = (a, b) => a * b;

type DivisionFunction = (a: number, b: number) => number;

const div: DivisionFunction = (a, b) => a / b;

type User = {
  firstname: string;
  lastname: string;
};

function greet(user: User): string {
  return `Hello ${user.firstname} ${user.lastname}`;
}

interface Human {
  height: number;
  weight: number;
  getInfo: () => string;
}

class Person implements Human {
  constructor(public height: number, public weight: number) {}

  getInfo() {
    return `${this.height} ${this.weight}`;
  }
}
