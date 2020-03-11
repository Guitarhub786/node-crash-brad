console.log(__dirname, __filename);

// CLASS
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name os ${this.name} and I am ${this.age}`)
  }
}

module.exports = Person;

// OBJECT
// const person = {
//   name: 'John Doe',
//   age: 30
// }

// module.exports = person;