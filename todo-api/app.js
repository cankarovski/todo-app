var express = require("express"),
  app = express(),
  cors = require("cors");

var todoRoutes = require("./routes/todos");

app.use(cors());
app.use("/api/todos", todoRoutes);

app.listen(8000, function () {
  console.log("App is running ...");
});
