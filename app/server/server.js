#!/usr/local/bin/node

var express  = require("express"),
    app      = express(),
    openData = require("./routes/opendatas"),
//    retriveData = require("./modules/RetrieveData"),
    server   = require('http').createServer(app),
    io       = require('socket.io').listen(server, { log: false });


var http = require("http");

var root = "/open-data",
    port=3007;

var options = {
    host: 'localhost',
    port: 3011,
    path: 'open-data/rest/population',
    headers: {
        'Content-Type': 'application/json'
    }
};




/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
var getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    //var prot = http;
    http.get(options, function(res) {
        console.log("Got response: " + res.statusCode);
    }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });
//    var req = prot.request(options, function(res)
//    {
//        var output = '';
//        console.log(options.host + ':' + res.statusCode);
//        res.setEncoding('utf8');
//
//        res.on('data', function (chunk) {
//            output += chunk;
//        });
//
//        res.on('end', function() {
//            var obj = JSON.parse(output);
//            onResult(res.statusCode, obj);
//        });
//    });
//
//    req.on('error', function(err) {
//        //res.send('error: ' + err.message);
//    });
//
//    req.end();
};


app.configure(function () {
    /**
     * Return the html files.
     */
    app.use(root, express.static(".."));
//    app.use(express.bodyParser());
});

app.get(root + '/rest/opendata', openData.data);

setInterval(function(){
    getJSON(options,
        function(satusCode, result){
            console.log(result);
        });
}, 3000);

app.listen(port);
console.log('Listening on port ' + port);
