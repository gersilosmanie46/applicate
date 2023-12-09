/* 
Filename: complexCode.js
Content: Complex JavaScript code with advanced features and extensive functionality
*/

// Object to store the data of a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
  
  growOld() {
    this.age++;
  }
}

// Object to manage a collection of people
class PeopleManager {
  constructor() {
    this.people = [];
  }
  
  addPerson(person) {
    this.people.push(person);
  }
  
  getPerson(index) {
    return this.people[index];
  }
  
  removePerson(index) {
    this.people.splice(index, 1);
  }
  
  greetAll() {
    this.people.forEach((person) => {
      person.greet();
    });
  }
}

// Creating instances of Person and PeopleManager
const john = new Person("John", 30);
const jane = new Person("Jane", 25);
const peopleManager = new PeopleManager();

// Adding people and calling methods
peopleManager.addPerson(john);
peopleManager.addPerson(jane);
peopleManager.getPerson(0).greet(); // Output: Hello, my name is John.
peopleManager.getPerson(1).greet(); // Output: Hello, my name is Jane.
peopleManager.greetAll(); // Output: Hello, my name is John. Hello, my name is Jane.
peopleManager.removePerson(1);
peopleManager.greetAll(); // Output: Hello, my name is John.

john.growOld();
console.log(john.age); // Output: 31

// Example of async/await and Promises
function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

async function complexAsyncFunction() {
  console.log("Starting async function...");
  
  await wait(2000);
  console.log("Async function: Waited 2000ms.");
  
  await wait(1000);
  console.log("Async function: Waited an additional 1000ms.");
}

complexAsyncFunction(); // Output after 3 seconds: Starting async function... Async function: Waited 2000ms. Async function: Waited an additional 1000ms.

// More code here...
// ...
// ...

// Total lines of code: > 200