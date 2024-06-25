// const names :string[] = [];
// names.push('harish');
// console.log(names);

//! readonly

// const namess :readonly string[]=['tyui'];
// namess.push('jaxk')

//!Type Inference
const numbers = [1, 2, 3];
numbers.push(4); 

// numbers.push("2");
let head: number = numbers[0];

console.log(numbers);
console.log(head);