// Tutorial:https://www.youtube.com/watch?v=TlB_eWDSMt4
// @ 1:10:50
// NodeJs HTTP module: https://nodejs.org/docs/latest-v18.x/api/http.html


// Noted we will not use HTTP module to build backend server in real world
// We will use Express framework, which gives a clean structure to our application
// Express to build on top of HTTP NodeJs module
// https://expressjs.com/en/starter/hello-world.html


const http = require('node:http');
const server = http.createServer((req, res) => {
    // type "node http.js" in termainl to start the server
    // go to browser and type "localhost:3000"
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    // type "node http.js" in termainl to start the server
    // go to browser and type "localhost:3000/api/courses"
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000...');