// function foo() {
//     throw new Error("Oops, something went wrong!");
// }
// function bar() {
//     foo();
// }
// function baz() {
//     bar();
// }
// baz();
// // This code will throw an error when executed, demonstrating a simple call stack.

// function foo() {
//     return foo();
// }
// foo();

/**
 * reading files - synchronous
 */
const fs = require('fs');

// try {
//     const data = fs.readFileSync('test.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error('Error reading file:', err);
// }

/**
 * reading files - asynchronous
 */

// fs.readFile('test.txt' , 'utf8' , (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// })

// x = [1,2,3,4,5,6]
// v = x.reduce((a, i) => a + i, 10)
// console.log(v);


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     describe() {
//         return `This is ${this.name} and makes ${this.sound}.`;
//     }
// }
// let a = new Animal('Jerry');
// console.log(a.describe());

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//         this.sound = 'woof';
//     }
// }
// let d = new Dog('Spike');
// console.log(d.describe());

// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//         this.sound = 'mieow';
//     }
//     static fromJson(o){
//         c = new Cat(o.name);
//         c.sound = o.sound;
//         return c;
//     }
// }
// let c = new Cat('Tom');
// console.log(c.describe());

// let p = JSON.stringify(c);
// console.log(c);
// console.log(p);

// k = { name: 'Kitty'}
// let c2 = Cat.fromJson(k);
// console.log(c2.describe());
// console.log(c2)

// Deserialize the JSON string back to a Cat object

// let cc = Cat.fromJson(JSON.parse(p));
// console.log(cc.describe());

// class A {
//     constructor (name) {
//         this.name = name;
//     }
// }
// obj = new A('Abhi');
// console.log(typeof(JSON.stringify(obj)));
// console.log(JSON.stringify(obj));
// for (const i in [1, 2, 3, 4, 5]) {
//     console.log(i);
// }
// for (const i = 1; i <= 5; i++) {
//     console.log(i);

// }
let a = [2, 3, 4];
let b = [2, 2, ...a, 5];
let c = b.find((x) => x%2);
console.log(c);
