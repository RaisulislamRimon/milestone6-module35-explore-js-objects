// create object using object literals
const player = {};
player.name = "John"; // properties
player.specialty = "batsman"; // properties
// method
player.bat = function () {
  console.log("Batsman function");
};
// console.log(player);
// console.log(player.name);
// console.log(player.specialty);
player.bat();
// console.log(player.bat()); // undefined

const student = {
  name: "Pandey",
  job: "khay andey",
  ball: function () {
    console.log("throw the ball");
  },
  salary: 100000000,
};

// object constructor
const person = new Object();
console.log(person);

const person1 = Object();
console.log(person1);

// object create method
const item = Object.create(null);
console.log(item); // [Object: null prototype] {}

const item1 = Object.create(student);
console.log(item1);
console.log(item1.name);
console.log(item1.friend);

// class
class Person {
  name = "abul";
  address = "sadarghat";
  constructor(age) {
    this.age = age;
  }
}
const person2 = new Person(22);
console.log(person2);

// function
function Car(model, price) {
  this.model = model;
  this.price = price;
}
const tesla = new Car("elon", 32);
console.log(tesla);
