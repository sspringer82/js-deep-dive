export default class User {
  constructor(private firstname: string, private lastname: string) {}

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}
