const express = require('express');
const app = express();
const fs = require('fs');

let content = fs.readFileSync('fixtures/user.json');
var jsonContent = JSON.parse(content);

app.listen(3000);

app.get('/', function(req, res) {
        res.json(jsonContent);
    })
;

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Lost !');
});
