const mongoose = require("mongoose");

const connect =()=> mongoose.connect("mongodb://localhost:27017/rcube").then("mongo connected");


module.exports = connect