let mongoose=require ("mongoose");
const { userDB } = require("./connection");
let userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
let enquirymodel=userDB.model("userdetails",userSchema);
module.exports=enquirymodel;