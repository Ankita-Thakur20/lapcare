const express = require("express")
const colors = require('colors')
const connectDB = require("./config/db_config")
const errorHandler = require("./middlewares/errorHandler")
require('dotenv').config()
const cors = require('cors')


const app = express()

//cors
app.use(cors())

//DB connection
connectDB()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//image upload route
// app.use("./uploads",express.static("uploads"))

//user routes
app.use('/api/users',require('./routes/authRoutes'))

//complaint routes
app.use('/api/complaints',require('./routes/complaintRoutes'))


//admin routes
app.use("/api/admin",require('./routes/adminRoutes'))

//default route
app.get("/",(req,res)=>{
    res.json({
        msg :"LAPCARE API RUNNING"
    })
})

//port
const PORT = process.env.PORT||8000;

//error handler
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`.bgYellow.blue)
})
