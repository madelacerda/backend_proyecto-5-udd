const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    usuario:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    }
});

const usuario = mongoose.model("user",userSchema );
module.exports= usuario;