// Tutorial:https://www.youtube.com/watch?v=TlB_eWDSMt4
// @ 40:20 
// NodeJs module list: https://nodejs.org/docs/latest-v18.x/api/path.html
// NodeJs Paht module: https://nodejs.org/docs/latest-v18.x/api/path.html

const path = require('node:path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// node pathModule.js