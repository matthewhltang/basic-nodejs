// Tutorial: https://www.youtube.com/watch?v=TlB_eWDSMt4
// @ 1:02:54
// NodeJs Event Emitter: https://nodejs.org/docs/latest-v18.x/api/events.html#emitterprependlistenereventname-listener

const EventEmitter = require('node:events'); 
//const emitter = new EventEmitter(); 

var url = 'http://mylogger.io/log';

// use the Class to solve duplicate EventEmitter in App.js & logger.js
class Logger extends EventEmitter {
    log(message) { //Functions inside a Class, we call Methods
        // Send an HTTP request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'https://'});
    };
    
}

module.exports = Logger;