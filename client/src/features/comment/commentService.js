import axios from "axios";
import { ApiUrl } from "../../config";

const fetchComments = async (id,token)=>{

    const options ={
        headers :{
            authorization :`Bearer ${token}`
        }
    }

    const response= await axios.get(`${ApiUrl}/api/complaints/${id}/comment`,options)
    return response.data;
}

const addComment = async (formData,token)=>{

    const options ={
        headers :{
            authorization :`Bearer ${token}`
        }
    }

    const response= await axios.post(`${ApiUrl}/api/complaints/${formData.id}/comment`,formData,options)
    return response.data;
}

const commentService = {fetchComments,addComment}

export default commentService;