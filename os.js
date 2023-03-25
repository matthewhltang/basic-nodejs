// Tutorial:https://www.youtube.com/watch?v=TlB_eWDSMt4
// @ 44:03
// NodeJs OS module: https://nodejs.org/docs/latest-v18.x/api/os.html

const os = require('node:os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Tol Memory: ' + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory2: ${totalMemory}`);
console.log(`Total FreeMemory2: ${freeMemory}`);