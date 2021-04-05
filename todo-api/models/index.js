var mongoose = require("mongoose");
/* mongoose.set("debug", true); */
mongoose.connect("mongodb://mongo:27017/todo-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
