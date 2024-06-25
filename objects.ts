// const car: { type: string, model: string, year: number } = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };

//   console.log(car);

  //!Type Inference

//   const car = {
//     type: "Toyota",
//   };
//   car.type = "Ford";
// //   car.type = 2; 

// console.log(car);

//!Optional Properties

const car: { type: string, mileage?: number } = { 
  type: "Toyota",
};
car.mileage = 2000;
console.log(car);


//!Index Signatures

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; 
// nameAgeMap.Mark = "Fifty"; 
console.log(nameAgeMap);