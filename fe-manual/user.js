// default export
// 1x pro Datei
// import: import User from './users.js';
// keine geschweiften Klammern
// Bezeichner beliebig wählbar!

export default class User {
  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
  }

  get fullname() {
    return `${this.fn} ${this.ln}`;
  }
}

export function createUser(fn, ln) {
  return new User(fn, ln);
}

export const defaultName = 'Müller';
