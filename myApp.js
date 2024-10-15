let express = require('express');
const res = require('express/lib/response');
let app = express();

/* Note to Professor: The FCC repo did not have
any comments on it when I cloned. I'm going to
implement the one's I've found on your Google
Docs example for organizations sake, though. */

// --> 7) Mount the Logger middleware here


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
/*require('dotenv').config();

const message = "HELLO JSON"
app.get("/json",
    (req, res) => res.json(
        {"message": process.env.MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message
    })
);*/
require('dotenv').config();
const message = "Hello json";
const responseMessage = process.env.MESSAGE_STYLE === 
        "uppercase" ? message.toUpperCase() : message;

app.get("/json", (req, res) => {
  res.json({ "message": responseMessage });
});




/** 7) Root-level Middleware - A logger */
// Place it before all the routes!


/** 8) Chaining middleware. A Time server */


/** 9) Get input from client - Route parameters */


/** 10) Get input from client ... */





 module.exports = app;
