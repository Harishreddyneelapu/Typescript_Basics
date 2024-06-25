//TypeScript allows types to be defined separately from the variables that use them.
//!Type Aliases
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const cars: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
console.log(cars);


//!Interfaces
// interface Rectangle {
//     height: number,
//     width: number
//   }
  
//   const rectangle: Rectangle = {
//     height: 20,
//     width: 10
//   };
//   console.log(rectangle.height*rectangle.width);

  //!union

  function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');