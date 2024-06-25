//!Interfaces

interface Person2 {
    name: string;
    age: number;
  }
  
  function getDetails(person: Person2): string {
    return `Name: ${person.name}, Age: ${person.age}`;
  }
  
  let persone = { name: "John", age: 25 };
  console.log(getDetails(persone));


  //! abstract classes

  abstract class Animal {
    abstract makeSound(): void;
  
  
    move(): void {
      console.log("Moving...");
    }
  }
  
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof!");
    }
  }
  
  
  let dog = new Dog();
  dog.makeSound();
  dog.move();