var express = require("express");
var app = exports.app = express();

app.get("/" , function(req, res) {
    res.send("xyz.site.com");
});