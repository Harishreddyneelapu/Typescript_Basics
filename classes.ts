// class Person {
//   name: string;
// }

// const person = new Person();
// person.name = "Jane";

//!visibility- access modifiers
// class Person {
//   private name: string;

//   public constructor(name: string) {
//     this.name = name;
//   }

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// // console.log(person.getName());

//! Parameter Properties

// class Person {
//   // name is a private member variable
//   public constructor(private name: string) {}

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// console.log(person.getName());


// !Readonly
// class Person {
//   private readonly name: string;

//   public constructor(name: string) {
    
//     this.name = name;
//   }

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// console.log(person.getName());


// !Inheritance: Implements
// Interfaces can be used to define the type a class must follow through the implements keyword.

// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {
//   public constructor(protected readonly width: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

//!Inheritance: Extends

// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {
//   public constructor(protected readonly width: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }

//   // getArea gets inherited from Rectangle
// }

//!Override

// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {

//   public constructor(protected readonly width: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }

//   public toString(): string {
//     return `Rectangle[width=${this.width}, height=${this.height}]`;
//   }
// }

// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }

//   // this toString replaces the toString from Rectangle
//   public override toString(): string {
//     return `Square[width=${this.width}]`;
//   }
// }

//!Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.


abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}