const wapperFunction = require('./wrapper-function.js');
console.log('message');

//const EventEmitter = require('node:events'); 
const Logger = require('./logger');
const logger = new Logger();

// Register an Event Listener
logger.on('messageLogged', (arg) => { //use arg or e, eventArg are commonly used // "function(arg)" & "(arg) =>" arrow function are the same in ES6
    console.log('Listener called ', arg);  
});

logger.log('message2');