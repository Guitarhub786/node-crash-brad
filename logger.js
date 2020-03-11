const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }

}



const talk = new Logger();

talk.on('message', data => console.log('Talk too much!', data));



talk.log("face")
talk.log("Harry");


// module.exports = Logger;



// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data));

// logger.log('Hello World')




// Module Wrapper Function
// (function (exports. require, module, __filename, __dirname) {

// })
// console.log(__dirname, __filename);


// CLASS
// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();

// OBJECT
// const person = require('./person');
// console.log(person.age);