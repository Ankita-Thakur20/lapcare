const express = require("express")

const { getUsers,getComplaints, getComments, updateComplaint, addComment } = require("../controllers/adminController")
const adminProtect = require("../middlewares/adminMiddleware")

const router = express.Router()

router.get("/complaints",adminProtect,getComplaints)
router.get("/users",adminProtect,getUsers)
router.get("/comments",adminProtect,getComments)
router.put("/:cid",adminProtect,updateComplaint)
router.post("/:cid",adminProtect,addComment)

module.exports = router;