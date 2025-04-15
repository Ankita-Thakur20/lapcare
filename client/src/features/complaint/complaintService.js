import axios from 'axios'

const fetchComplaints = async(token)=>{

    const options ={
        headers :{
            authorization :`Bearer ${token}`
        }
    }

    const response = await axios.get('/api/complaints',options)
    return response.data;
    // console.log(response.data)
    // console.log("fetching...Complaints")
};

const fetchComplaint = async(id,token)=>{

    const options ={
        headers :{
            authorization :`Bearer ${token}`
        }
    }

    const response = await axios.get('/api/complaints/'+id,options)
    return response.data;
    // console.log(response.data)
    // console.log("fetching...Complaints")
};

//add complaint
const addComplaint = async(formData,token)=>{
    const options ={
        headers :{
            authorization :`Bearer ${token}`
        }
    }

    const response = await axios.post('/api/complaints/',formData,options)
    return response.data;
    // console.log(formData,token)
}

const updateComplaint = async(id,token)=>{
    const options ={
        headers :{
            authorization :`Bearer ${token}`
        }
    }

    const response = await axios.put('/api/complaints/'+id,{status : "close"},options)
    return response.data;
    // console.log(formData,token)
}

 const complaintService = {fetchComplaints , fetchComplaint , addComplaint, updateComplaint}

 export default complaintService;