const express = require("express");
const path = require("path");
var exphbs = require("express-handlebars");

const app = express();
const port = 3001;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// app.get("/", function (req, res) {
// 	res.render("home");
// });

// app.listen(3000);

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "Routes/blog.js")));

app.listen(port, () => {
	console.log("BlogExpress Server is working");
});
