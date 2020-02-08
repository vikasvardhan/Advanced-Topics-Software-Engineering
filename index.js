// var express = require("express");
// var app = express();
// var cors = require("cors");
// app.use(cors);

// var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var port = process.env.PORT || 3330; // Set our port

// // Routes for our API

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () =>
//   console.log(`Hello world app listening on port ${port}!`)
// );
// console.log("Magic happens on port " + port);

var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());

app.get("/", (req, res) => res.status(200).json({ message: "Hello World" }));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on 8585");
});
