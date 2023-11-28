import { access, constants, open, read, close, readFile } from 'node:fs';

function doSomethingAsync(callback) {
  setTimeout(() => {
    const operationResult = 1 + 1;

    callback(operationResult);
  }, 1000);
}

function myCallback(value) {
  console.log(value);
}

doSomethingAsync(myCallback);

// -- fs --

access('input.txt', constants.R_OK, (err) => {
  open('input.txt', 'r', (err, fd) => {
    read(fd, (err, bytes, buffer) => {
      console.log(buffer.toString());
      close(fd, (err) => {
        console.log('finished');
      });
    });
  });
});

readFile('input.txt', 'utf-8', (err, data) => {
  console.log(data);
});
