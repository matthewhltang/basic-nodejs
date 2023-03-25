// Tutorial: https://www.youtube.com/watch?v=TlB_eWDSMt4
// @00:00 - 39:53

//(function (exports, require, module, __filename, __dirname){ //Module Wrapper Function


    console.log(__filename);
    console.log(__dirname);
    var url = 'http://mylogger.io/log';

    function log(message) {
        // Send an HTTP request
        console.log(message);
    };

    module.exports.wapperFunction = log;

//})