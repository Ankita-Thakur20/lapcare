import axios from 'axios'

const register = async(formData)=>{
    const response = await axios.post('/api/users/register',formData)
    localStorage.setItem('user',JSON.stringify(response.data))
    return response.data;
}

const login = async(formData)=>{
    const response = await axios.post('/api/users/login',formData)
    localStorage.setItem('user',JSON.stringify(response.data))
    return response.data;
}

const authService = {register,login}
export default authService;

