class Person {
    protected name: string;
    protected age: number;
    protected address: string;
  
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
  }
  
  class Student extends Person {
    private rollNo: number;
    private phone: number;
    private school: string;
  
    constructor(name: string, age: number, address: string, rollNo: number, phone: number, school: string) {
      super(name, age, address);
      this.rollNo = rollNo;
      this.phone = phone;
      this.school = school;
    }
  
    public getName(): string {
      return `${super.getName()} your roll number is ${this.rollNo}`;
    }
  
    public getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Roll No: ${this.rollNo}, Phone: ${this.phone}, School: ${this.school}`;
    }
  }
  
  let student = new Student("Clifford", 25, "Ghana", 10, 240000000, "AAMUSTED");
  
  console.log(student.getName());       
  console.log(student.getAge());        
  console.log(student.getAddress());    
  console.log(student.getDetails());    
  