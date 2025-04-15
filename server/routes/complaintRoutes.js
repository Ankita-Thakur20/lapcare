const express = require('express')
const { getComplaints, getComplaint, raiseComplaint, updateComplaint } = require('../controllers/complaintController')
const protect = require('../middlewares/authMiddleware')


const router = express.Router()
// const multer = require('multer')

// const upload = multer({dest:"./uploads"}); //temporary storage



//method : /api/complaint
router.get("/",protect,getComplaints)
    

//method : /api/complaint/123
router.get('/:id',protect,getComplaint)

router.post("/",protect,raiseComplaint)

router.put("/:id",protect,updateComplaint)


//comment route
router.use("/:id/comment",require("./commentRoutes"))

module.exports = router;