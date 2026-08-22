import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    age : {
        type : Number,
        require : true
    },
    password:{
        type: Number,
        require:true,
        unique:true
    },
    username : {
        type : String,
        require : true,
        unique : true
    }
},{timestamps : true})



// model creation:

const User = mongoose.model("user" , userSchema)
export default User