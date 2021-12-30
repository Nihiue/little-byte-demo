require('little-byte');
const hello = require('./hello-export.bytecode');

console.log(hello.sayHello.toString());

hello.sayHello(['required']);
console.log(hello.class.toString());
hello.asyncArrow();

