var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var reservations = [];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"))
});