
abstract class Person3 {
    private name: string;
    private age: number;
    private address: string;
  
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getAge(): number {
      return this.age;
    }
  
    public getAddress(): string {
      return this.address;
    }
  
    abstract getDetails(): string;
  }
  
 
  
  class Student2 extends Person3 {
    private rollNo: number;
  
    constructor(name: string, age: number, address: string, rollNo: number) {
      super(name, age, address);
      this.rollNo = rollNo;
    }      
  
    public getRollNo(): number {
      return this.rollNo;
    }
  
    public getDetails(): string {
      return `${this.getName()} ${this.getAge()} ${this.getAddress()} ${this.getRollNo()}`;
    }
  }
  
  
  
  let studente = new Student2("John", 25, "USA", 1);
  console.log(studente.getDetails());