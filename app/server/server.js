#!/usr/local/bin/node

var express  = require("express"),
    app      = express(),
    openData = require("./routes/opendatas"),
    retrieveData = require("./modules/RetrieveData"),
    dataAPIs = require("./modules/DataAPI"),
    server   = require('http').createServer(app),
    io       = require('socket.io').listen(server, { log: false });

var root = "/open-data",
    port=3007;

var getProperOptions = function(api){
    var ApiList =     dataAPIs.APIList;

    for(var index = 0; index < ApiList.length; index ++){
        if(ApiList[index].name.toLowerCase() == api){
            console.log(ApiList[index].name);
            return ApiList[index].options;
        }
    }
}

app.configure(function () {
    app.use(root, express.static(".."));
});

app.get(root + '/rest/opendata', openData.data);

io.sockets.on('connection', function(client){
    console.log("Connected client " + client);

    client.on('getData', function(data){
        console.log(data);
        var options = getProperOptions(data);

        console.log("-----In GetData-----");
        console.log(options);
        console.log("--------------------");

        retrieveData.getJSON(options,
            function(satusCode, result){
                console.log("---RESULTS:");
                console.log(result);
                console.log("---End results");
                if(result instanceof Array){
                    console.log("Array");

                    var json = {};
                    json["title"] = "Dracu in praznic";
                    json["data"]    = result;

                    client.emit('dataReceived', json)
                }
                else{
                    console.log("JSON it is :)")
                    client.emit('dataReceived', result);
                }
            });

        setInterval(function(){
            retrieveData.getJSON(options,
                function(satusCode, result){
                    client.emit('dataReceived', result);
                });
        },3000);

    });
});

server.listen(port);
console.log('Listening on port ' + port);