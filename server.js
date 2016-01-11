"use strict";

let express = require("express");
let handlebars = require("express-handlebars");
let app = express();
app.use(express.static("wwwroot"));
// app.use(express.static("src/views"));


app.set("views", "./src/views");
app.engine(".hbs", handlebars({ extname: ".hbs" }));

app.set("view engine", ".hbs");

let port = process.env.PORT || 9999;

app.get("/", (request, response) => {
    response.render("index");
});

app.get("/books", (request, response) => {
    response.send("Hello World");
});



app.listen(port, (error) => {
    console.log("Listening on Port: " + port);
});
