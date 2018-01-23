const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/user');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    email : String,
    password : String
});

const User = mongoose.model("user", userSchema);

module.exports = User;