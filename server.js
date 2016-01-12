"use strict";

let express = require("express");

let app = express();
app.use(express.static("wwwroot"));
// app.use(express.static("src/views"));


app.set("views", "./src/views");
app.set("view engine", "ejs");

let port = process.env.PORT || 9999;

let bookRouter = express.Router();

bookRouter.route("/")
    .get(function (req, res) {
        res.render("books",{title: "Books",
        nav: [
            { Link: "/Books", Text: "Books" },
            { Link: "/Authors", Text: "Authors" }
        ]});

bookRouter.route("/single")
    .get(function (req, res) {
        res.send("Hello Single Books");
    });


app.use("/Books", bookRouter);

app.get("/", (request, response) => {
    response.render("index", {title: "Derping from handlebars rendering",
        nav: [
            { Link: "/Books", Text: "Books" },
            { Link: "/Authors", Text: "Authors" }
        ]});
});

// app.get("/books", (request, response) => {
//     response.send("Hello World");
// });


app.listen(port, (error) => {
    console.log("Listening on Port: " + port);
});
