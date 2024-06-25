//TypeScript has a specific syntax for typing function parameters and return values.
//!Return Type
// The type of the value returned by the function can be explicitly defined

function getTime(): number {
    return new Date().getTime();
}
console.log(getTime());

//!Void Return Type

function printHello(): void {
    console.log('Hello!');
}

//!Parameters
//Function parameters are typed with a similar syntax as variable declarations.
function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(10, 3));

//!Optional Parameters

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  console.log(add(1,3));

  //!Default Parameters

  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }

  console.log(pow(3,2));

  //!Named Parameters
  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }

  console.log(divide({dividend: 10, divisor: 2}));

  //!Rest Parameters

  function added(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }
  const nunsd = [1,3,4,4];
  console.log(added(2,4,...nunsd));