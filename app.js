let fs = require("fs");
let express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.render("index.ejs");
})


app.listen(3000)