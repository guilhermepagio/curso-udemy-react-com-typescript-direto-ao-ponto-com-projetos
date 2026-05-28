interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const myUser: User = {
  id: 1,
  name: "Guilherme",
  isActive: true,
};

console.log(myUser);

class Person implements User {
  id: number;
  name: string;
  isActive: boolean;

  constructor(id: number, name: string, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.isActive = isActive;
  }

  greet(isNewUser: boolean): string {
    if (isNewUser) {
      return `Welcome, ${this.name}!`;
    }
    return `Hello, my name is ${this.name}`;
  }
}

const person1 = new Person(2, "Maria", false);
console.log(person1);
console.log(person1.greet(false));
console.log(person1.greet(true));
