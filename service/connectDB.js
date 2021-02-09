const mongoose = require("mongoose");


//mongoose collection
const connectToDatabase = () => {
    mongoose
    .connect("mongodb://localhost:27017/todo",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log("Connected To database");
    })
    .catch((error) => console.log(error));
} 

module.exports = {
    connect: connectToDatabase,
}