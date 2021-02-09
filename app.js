const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const database = require("./service/connectDB");
const TodoRouter = require("./routes/todoRoute");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use("/TodoRouter", TodoRouter);

database.connect();

app.listen(8000,function(){
    console.log("Server started on port 8000");
});