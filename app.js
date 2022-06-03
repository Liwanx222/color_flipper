let fs = require("fs");
let express = require("express");

const app = express();
app.set("view engine", "ejs");
const port = 8080;


app.get("/", (req, res) => {
    res.render("pages/index");
})


app.listen(port)