#!/usr/local/bin/node

var express = require("express"),
    population = require("./routes/population"),
    debts = require("./routes/debts"),
    app = express();


var root = "/open-data",
    port=3011;

app.configure(function () {
    /**
     * Return the html files.
     */
    app.use(root, express.static(".."));
});


app.get(root + '/rest/population', population.data);
app.get(root + '/rest/debts', debts.data);

app.listen(port);
console.log('Listening on port ' + port);
