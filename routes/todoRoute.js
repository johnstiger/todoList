const express = require("express");
const router = express.Router();
const app = express();
const{
    getTodoList,
    addTodoList,
    updateTodoList,
    updateList,
    deleteTodoList,
} = require("../controller/todoController");
const { deleteOne } = require("../model/todo");

router.get("/",getTodoList);
router.post("/NewTodo",addTodoList);
router.get("/updateTodo/:id",updateTodoList);
router.post("/updateList/:id",updateList);
router.get("/deleteTodo/:id",deleteTodoList);

module.exports = router;