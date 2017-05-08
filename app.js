var express = require("express");
var bodyParser = require("body-parser");
var exhbs = require("express-handlebars");
var path = require("path");

//Init app
var app = express();

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//View Engine
app.set("views",path.join(__dirname,"views"));
app.engine("handlebars",exhbs({defaultLayout : "main"}));
app.set("view engine","handlebars");

//Set Static Folder
app.use(express.static(path.join(__dirname,"public")));

//Configure Routes
var configRoutes = require("./routes");
configRoutes(app);

app.listen(3000,function(){
    console.log("Server running on port 3000...");
})