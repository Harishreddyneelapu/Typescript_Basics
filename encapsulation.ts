class Person1 {
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
  }
  
  let person = new Person1(" Clifford", 20, "Ghana");
  
  console.log(person.getName());
  console.log(person.getAge());
  console.log(person.getAddress());