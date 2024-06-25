//?A tuple is a typed array with a pre-defined length and types for each index.

// let names :[number,string,boolean];
// names=[1,'fghjkl',true]
// console.log(names);


//!readonly

// let ourTuple: readonly [number, boolean, string];

// ourTuple = [5, false, 'Coding God was here'];

// // ourTuple.push('Something new and wrong');
// console.log(ourTuple);

//! named tuple

// const graph: [x: number, y: number] = [55.2, 41.3];
// console.log(graph);


//!destructuring tuples

const mapss : [number, string] = [23,'ghjk'];
const [a,b]=mapss;
console.log(a);
console.log(b);