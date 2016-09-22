/**
 * Created by naga- on 9/22/2016.
 */

// link to the connect package
var connect = require('connect');

// link to the url module
var url = require('url');

// create a new app using connect
var app = connect();

var calculate = function(req, res, next) {

    // get url params
    var qs = url.parse(req.url, true).query;

    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);

    // run the appropriate calculation
    var total;

    res.writeHead(200, { "Content-Type": "text-plain"} );

    if (method == "add") {
        total = x + y;
        res.write(x + ' + ' + y + ' = ' + total);
    }
    else if (method == "subtract") {
        total = x - y;
        res.write(x + ' - ' + y + ' = ' + total);
    }
    else if (method == "multiply") {
        total = x * y;
        res.write(x + '  * ' + y + ' = ' + total);
    }
    else if (method == "divide") {
        total = x / y;
        res.write(x + ' / ' + y + ' = ' + total);
    }
    else {
        res.write('Invalid Method');
    }

    res.end();
};

// map url
app.use('/lab3', calculate);

app.listen(3000);
console.log('Lab 3 app running at http://localhost:3000');
