let express = require('express');
const res = require('express/lib/response');
let app = express();
require('dotenv').config();


// --> 7) Mount the Logger middleware here
app.use(function middleware (req, res, next) {
    var str = req.method + " " + req.path
            + " - " + req.ip;
    console.log(str);
    next();
})

// --> 11) Mount the body-parser middleware here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express server. */
//app.get("/", function(req, res) {
//    res.send("Hello Express");
//});



/** 3) Serve an HTML file */
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

/** 4) Serve static assets */
app.use("/public", express.static(__dirname + "/public"));

/** 5) Serve JSON on a specific route */
//app.get("/json", (req, res) =>{
//    res.json({
//        message: "Hello json"
//    });
//});

/** 6) Use the .env file to configure the app */
app.get("/json", (req, res) => {
    if (process.env["MESSAGE_STYLE"] == "uppercase") {
        res.json({"message": "HELLO JSON"})
    } else {
        res.json({"message": "Hello json"})
    }
});




/** 7) Root-level Middleware - A logger */
// Place it before all the routes!


/** 8) Chaining middleware. A Time server */
app.get('/now', function (req, res, next){
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.send({time: req.time});
});

/** 9) Get input from client - Route parameters */
app.get("/:word/echo", (req, res) => {
    const {word} = req.params;
    res.json({echo: word});
});

/** 10) Get input from client ... */
app.get("/name", function(req, res){
    var fName = req.query.first;
    var lName = req.query.last;

    res.json({
        name: `${fName} ${lName}`
    });
});




 module.exports = app;
