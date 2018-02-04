var http = require('http');
var fs = require('fs');
var esl = require('./ESLPackageCreation.js');

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        var signerToken = esl.processForm(req, res);
    }

});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

server.listen(8888);
console.log("Listening on port 8888...");