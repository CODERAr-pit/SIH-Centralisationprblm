const express= require("express")
let route=express.Router();
const Query = require("../public/queryschema");
require('dotenv').config();
route.post("/login",async(req,res)=>{
    let {username,password,department}=req.body;
   try{
    let user= process.env[`username${department}`]==username&&process.env[`password${department}`]
       //render all queries to his department related
       if(user){
         const queries= await Query.find({department:department});
         res.send({
            status:1,
            query:queries
         })
         }
         else{
            res.send({
                Issue:"Username and Password dont match,Please Try Again"
            })
         }
       }
      catch(err){
        res.send({
            status:0,
            Error:err
        })
      }
    }
   )
   module.exports = route;
  // feature to update not done
    
