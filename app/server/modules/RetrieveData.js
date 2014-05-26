var http = require("http");
var requestify = require('requestify');


/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
exports.getJSON = function(options, onResult)
{

    var req = http.request(options, function(res)
    {
        var output = '';

        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            console.log(chunk);
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        console.log(err);
    });

    req.end();
};

