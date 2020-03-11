const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'))

// Init event
myEmitter.emit('event');




let yelp = 'Chump!';
myElmo = new MyEmitter();
myElmo.on('Bruce', () => console.log(`Boards don't hit back! ${yelp}`));
myElmo.on('Jackie', () => console.log("La chow lo wa!"));

myElmo.emit('Jackie');
myElmo.emit('Bruce');
myElmo.emit('Jackie');