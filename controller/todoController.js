const {replaceOne} = require("../model/todo");
const Todo = require("../model/todo");
const parseRequestBody = require("../utils/parseRequestBody");

const getTodoList = async (request, response) => {
    try{
        const todo = await Todo.find();
        if(!todo){
            return response.status(400).json({
                error:"Error in getting list",
            }); 
        }
        response.render("index",
        {todoList:todo,name:""}
        );
     
    
    }catch(e){
        return response.status(400).json({
            error:e,
        });
    }
};

const addTodoList = async (request, response) => {
    try{
        const newItem = {
            name:request.body.item
        };
        console.log(newItem);
        const newTodo = new Todo(newItem);
        const result = await Todo.create(newTodo, function(err, Todo){
            if(err){
                console.log(err);
            }else{
                console.log("Inserted item "+newItem);
            }
        });
        response.redirect("/TodoRouter");
    }catch(e){
        return response.status(400).json({
            error:e,
        });
    }
};
const updateTodoList = async (request, response) => {
    const update = parseRequestBody(request.body);
    try{
        console.log(request.params.id);
        await Todo.findById(
            {_id:request.params.id},
            (err,res) => {
                if(err){
                    return response.status(400).json({
                        error: "Error updating list",
                    });
                }
                response.render("update",{todo:res});
            }
            );
            
    }catch(e){
        return response.status(400).json({
            error:e,
        });
    }
};
const updateList = async (request, response) => {
    try{
        await Todo.updateOne({_id:request.params.id},{
            name:request.body.item,
        },(err,res) => {
            if(err){
                return response.status(400).json({
                    error:"Error updating list",
                });
            }
            response.redirect("/TodoRouter");
        })
    }catch(e){

    }
}
const deleteTodoList = async (request, response) => {
    console.log(request.params.id);
    try{
        const removeItem = request.params.id;
       await Todo.deleteOne({_id:removeItem}, function(err, Todo){
            if(err){
                console.log(err)
            }else{
                console.log("Removed Item "+removeItem);
            }
       });
       response.redirect("/TodoRouter");
    }catch(e){
        return response.status(400).json({
            error:e,
        });
    }
}
module.exports = {
    getTodoList,
    addTodoList,
    updateTodoList,
    updateList,
    deleteTodoList,
};