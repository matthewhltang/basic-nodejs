// Tutorial:https://www.youtube.com/watch?v=TlB_eWDSMt4
// @ 53:27
// NodeJs OS module: https://nodejs.org/docs/latest-v18.x/api/events.html

//EventEmitter is a class, it defines what EventEmitter can do
const EventEmitter = require('node:events'); 

// Class & Object
// Class is like a Human, Object is like John, Mary
const emitter = new EventEmitter(); 

// Register a listener, "on" & "addEventListener" are the same
// Event Listener is needed to be created before "emit" to raise an event
emitter.on('messageLogged', function(arg) { //use arg or e, eventArg are commonly used // "function(arg)" & "(arg) =>" arrow function are the same in ES6
    console.log('Listener called ', arg);  
})

//emitter. will show all methods
// Emit = Making a noise, product - a signalling
// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'https://'});

// Test
// Please create a logging event & event listener for the message
emitter.on('logging', (arg) => {
    console.log('Logging message received successfully ', arg);
})
emitter.emit('logging', {message: 'testing message'});

