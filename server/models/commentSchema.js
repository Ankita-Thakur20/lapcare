const { mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
       },

    complaint :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"complaint",
        required:true
    },

    message:{
        type:String,
        required:true,

    },
    
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }

},{
    timestamps:true
})
module.exports = mongoose.model("Comments",commentSchema)