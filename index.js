var express = require("express");
var vhost = require("vhost");
var app = express();

app.use(vhost("abc.site.com", require("./app1.js").app));
app.use(vhost("xyz.site.com", require("./app2.js").app));

app.listen(3000);