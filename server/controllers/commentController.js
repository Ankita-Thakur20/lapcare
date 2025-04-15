const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Complaint = require("../models/complaintModel")
const Comment = require("../models/commentSchema")


//get comments
const getComments = asyncHandler(async(req,res)=>{
    // find user exist
    const user = await User.findById(req.user._id)
    console.log(user)
    if(!user){
        res.status(401);
        throw new Error("Invalid Req")
    }
 const complaint = await Complaint.findById(req.params.id)
 if(!complaint){
    res.status(404)
    throw new Error("No complaint found")
 }
 const comments = await Comment.find({complaint:complaint._id})
 if(!comments){
    res.status(400)
    throw new Error("No commnets found")
 }res.status(200).json(comments)
})


//add comment
const addComment = asyncHandler(async(req,res)=>{

    const {text} =req.body
    if(!text){
        res.status(400)
        throw new Error("please fill all details")
    }
    // find user exist
    const user = await User.findById(req.user._id)
    console.log(user)
    if(!user){
        res.status(401);
        throw new Error("Invalid Req")
    }
 const complaint = await Complaint.findById(req.params.id)
 if(!complaint){
    res.status(404)
    throw new Error("No complaint found")
 }

const comment = await Comment.create({user:user._id,complaint:complaint._id,message:text})
    // res.send("Comment added")
    if(!comment){
        res.status(400)
        throw new Error("No comment added")
    }
    res.status(201).json(comment)


})

  module.exports ={getComments,addComment}