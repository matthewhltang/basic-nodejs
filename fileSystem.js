// Tutorial:https://www.youtube.com/watch?v=TlB_eWDSMt4
// @ 48:36
// NodeJs FIle System module: https://nodejs.org/docs/latest-v18.x/api/fs.html

const fs = require ('node:fs');

// const files = fs.readdirSync('./');
// console.log(files);

// Async function to read directory with an err & callback function
fs.readdir('./', function(err, files){ 
    if (err) console.log('Error', err); throw(err);
    else console.log('Result', files);
});
