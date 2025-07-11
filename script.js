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

function foo() {
    return foo();
}
foo();
