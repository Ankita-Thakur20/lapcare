const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Complaint = require("../models/complaintModel")
const Comment = require("../models/commentSchema")

const getUsers = asyncHandler(async(req,res)=>{

    const users = await User.find().select("-password")
    if(!users){
        res.status(404)
        throw new Error("No users found")
    }
    res.status(201).json(users)
// res.send("All users")
})


const getComplaints = asyncHandler(async(req,res)=>{
    const complaints = await Complaint.find()
    if(!complaints){
        res.status(404)
        throw new Error("No Complaints found")
    }
    res.status(201).json(complaints)
    // res.send("All complaints")
})


const updateComplaint = asyncHandler(async(req,res)=>{
const updatedComplaint = await Complaint.findByIdAndUpdate(req.params.cid,req.body,{new:true})
if(!updatedComplaint){
    res.status(404)
    throw new Error("No Complaints Updated")
}
res.status(201).json(updatedComplaint)
    // res.send("complaint updated")
})


const getComments = asyncHandler(async(req,res)=>{
    const comments = await Comment.find()
    if(!comments){
        res.status(404)
        throw new Error("No Comments found")
    }
    res.status(201).json(comments)
    // res.send("All commnets")
})

const addComment = asyncHandler(async(req,res)=>{

    const {message}=req.body
    if(!message){
        res.status(400)
        throw new Error("Please fill all details")
    }
    const comment = await Comment.create({user : req.user._id,complaint :req.params.cid, message:message,isAdmin:true})
    if(!comment){
        res.status(400)
        throw new Error("Comment not created")
    }
    res.status(201).json(comment)
        //  res.send("Comment added")
}
)

module.exports ={getUsers,getComments,getComplaints,addComment,updateComplaint}