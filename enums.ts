// An enum is a special "class" that represents a group of constants (unchangeable variables).
//! Numeric Enums - Default

// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   }
//   let currentDirection = CardinalDirections.North;
//   console.log(currentDirection);
  
// //   currentDirection = 'North'; 

//!Numeric Enums - Initialized
// enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
//   }
  
//   console.log(CardinalDirections.North);
  
//   console.log(CardinalDirections.West);


//!Numeric Enums - Fully Initialized

// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   }

//   console.log(StatusCodes.NotFound);
  
//   console.log(StatusCodes.Success);

//!String Enums

// enum CardinalDirections {
//     North = 'North',
//     East = "East",
//     South = "South",
//     West = "West"
//   };
  
//   console.log(CardinalDirections.North);
  
//   console.log(CardinalDirections.West);