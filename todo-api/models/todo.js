var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: "Task cannot be blank!",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

var Todo = mongoose.model("Todo", todoSchema, "Todo");

module.exports = Todo;
