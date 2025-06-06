const mongoose = require("mongoose");
const { queryDB } = require("./connection");
const QuerySchema = new mongoose.Schema({
    query: {
    type: String,
    required: true,
  },
   department: {
    type: String,
    required: true,
  },
   address: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
  }
});
const QueryModel = queryDB.model("QueryDetail", QuerySchema);
module.exports = QueryModel;
