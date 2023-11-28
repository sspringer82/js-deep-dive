// amd require + define
// commonJS require + module.exports
// umd
// ECMAScript import + export

import User, { createUser, defaultName as standardName } from './user.js';

const klaus = new User('Klaus', standardName);
console.log(klaus.fullname);

const lisa = createUser('Lisa', standardName);
console.log(lisa.fullname);
