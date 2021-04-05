var express = require("express");
var router = express.Router();
api = require("../api/todos");

router.route("/").get(api.getTodos).post(api.createTodo);

router
  .route("/:todoId")
  .get(api.getTodo)
  .put(api.updateTodo)
  .delete(api.deleteTodo);

module.exports = router;
