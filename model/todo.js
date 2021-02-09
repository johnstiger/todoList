const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//mongoose schema
const todoSchema = Schema({
    name: String
});

const Todo = mongoose.model("Todo",todoSchema);

module.exports = Todo;