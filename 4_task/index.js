const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// Initialize object
const myEmitter = new MyEmitter();

// Add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

// Timeout is not necessary to emit, just adds a small delay
setTimeout(() => {
    // Emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);
