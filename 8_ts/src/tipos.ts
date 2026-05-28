let isActive: boolean;

isActive = true;

console.log(typeof isActive);

let total: number = 150;

let myName: string = "Guilherme";

console.log(typeof isActive, typeof total, typeof myName);

let isComplete = false;

let amount = 200;

let userName = "Maria";

console.log(typeof isComplete, typeof amount, typeof userName);

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

console.log(typeof numbers, typeof names);

let user: { name: string; age: number } = {
  name: "Guilherme",
  age: 22,
};

console.log(typeof user);

let rgb: [number, number, number] = [255, 0, 0];

console.log(typeof rgb);

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Guilherme"));

enum Direction {
  Up,
  Down,
  Left,
  Right,
  Diagonal,
}

console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);

function getDirectionMessage(direction: Direction): string {
  switch (direction) {
    case Direction.Up:
      return "You are going up!";
    case Direction.Down:
      return "You are going down!";
    case Direction.Left:
      return "You are going left!";
    case Direction.Right:
      return "You are going right!";
    default:
      return "Unknown direction!";
  }
}

console.log(getDirectionMessage(Direction.Up));
console.log(getDirectionMessage(Direction.Down));
console.log(getDirectionMessage(Direction.Left));
console.log(getDirectionMessage(Direction.Right));
console.log(getDirectionMessage(Direction.Diagonal));
