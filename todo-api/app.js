var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors");

var todoRoutes = require("./routes/todos");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/todos", todoRoutes);

app.listen(8000, function () {
  console.log("App is running ...");
});
