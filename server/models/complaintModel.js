const { mongoose } = require("mongoose");

const complaintSchema = new mongoose.Schema({

    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
   },

    laptop:{
    type:String,
    enum:['apple',"lenovo","dell","acer",'hp','samsung'],
    required:true
   },

    status:{
    type:String,
    enum:['open',"close","pending"],
    default:'open',
    required:true
   },

    description:{
    type:String,
    required:true,
   },

   image:{
    type:String,
    required:true,
   },
},{
    timestamps : true
})
module.exports = mongoose.model("Complaints",complaintSchema)