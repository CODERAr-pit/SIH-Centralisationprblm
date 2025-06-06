const express =require ("express");
let mongoose=require("mongoose")
let route=express.Router();
require('dotenv').config();
const { userDB, queryDB } = require("./connection");
const User = require("./userschema");
const Query = require("./queryschema");
const sendmail=require("./mailer.js");
const nodemailer=require ("nodemailer");


route.post("/signup",async(req,res)=>{
  let {username,password,dob,email}=req.body;
  let enquiry=new User({
    username:username,
    password:password,
    dob:dob,
    email:email
  })
  enquiry.save().then(()=>{
    res.send({
      status:1,
      msg:"saved",
    });
  }).catch((err)=>{
    res.send({
      status:0,
      msg:"not saved",
      error:err
    })
  })
})

route.post("/login",async(req,res)=>{
    let {username,password}=req.body;
    let user=await User.findOne({username:username});
    if(user){
       if(user.password==password){
        res.redirect("./querypage")
       }
       else {
        res.send("username and password not matched");
       }}
    else {
        res.send("invalid username");
        return;
    }
    }
)

route.post("/query",async(req,res)=>{
 try{
  let {query,department,address,username,email}=req.body;
  let valid=await User.findOne({username:username});
  if(valid){let user=new Query({
    query:query,
    department:department,
    address:address,
    username:username,
    email:email
  });
  await user.save();
     res.send({
            status:1,
              msg:"Query submitted succesfully our team will reach to u soon",
          })
    sendMail(email, "Thanks for submitting Your Query!", `Hi ${username},
            
            We received your query Thank you for reaching out to us. We have received your message and will get back to you shortly.  .`);
          }
   }catch(err){
            res.send({
              status:0,
              msg:"submission failed at some point",
              Error:err
            })
        }

        
}
)
// to learn

module.exports = route;