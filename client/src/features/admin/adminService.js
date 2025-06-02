import axios from "axios"
import { ApiUrl } from "../../config";

const fetchAllUsers = async(token)=>{
    
    const options = {
        headers :{
            authorization :`Bearer ${token}`
        }
    }
    // console.log(token)
 const response = await axios.get(`${ApiUrl}/api/admin/users`,options)
 return response.data;
//  console.log(response.data)
}

const fetchAllComplaints = async(token)=>{
    const options = {
        headers :{
            authorization :`Bearer ${token}`
        }
    }
    // console.log(token)
 const response = await axios.get(`${ApiUrl}/api/admin/complaints`,options)
 return response.data;
}

const updateComplaint = async()=>{
    console.log("complaint updated...")
}

const adminService ={fetchAllComplaints,fetchAllUsers,updateComplaint}

export default adminService;