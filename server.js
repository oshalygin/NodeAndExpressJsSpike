"use strict";

let express = require("express");

let app = express();
app.use(express.static("wwwroot"));
// app.use(express.static("src/views"));


app.set("views", "./src/views");
app.set("view engine", "ejs");

let port = process.env.PORT || 9999;

app.get("/", (request, response) => {
    response.render("index", {title: "Derping from handlebars rendering", list: ["a", "b"] });
});

app.get("/books", (request, response) => {
    response.send("Hello World");
});



app.listen(port, (error) => {
    console.log("Listening on Port: " + port);
});
