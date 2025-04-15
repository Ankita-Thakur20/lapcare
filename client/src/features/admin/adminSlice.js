import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";


const adminSlice = createSlice({
    name : "admin",
    initialState:{
        allusers : [],
        AllComplaints:[],
        isLoading : false,
        isError : false,
        isSuccess :false,
        message :""
    }
    ,reducers :{},
    extraReducers : (builder)=>{
  builder
  .addCase(getAllUsers.pending,(state,action)=>{
    state.isLoading = true
    state.isSuccess = false
    state.isError = false
}) 
.addCase(getAllUsers.fulfilled,(state,action)=>{
    state.isLoading = false
    state.isSuccess = true
    state.allusers = action.payload
    state.isError = false

}) 

.addCase(getAllUsers.rejected,(state,action)=>{
    state.isLoading = false
    state.isSuccess = false
    state.isError = true
    state.message = action.payload
}) 



.addCase(getAllComplaints.pending,(state,action)=>{
    state.isLoading = true
    state.isSuccess = false
    state.isError = false
}) 
.addCase(getAllComplaints.fulfilled,(state,action)=>{
    state.isLoading = false
    state.isSuccess = true
    state.AllComplaints = action.payload
    state.isError = false

}) 

.addCase(getAllComplaints.rejected,(state,action)=>{
    state.isLoading = false
    state.isSuccess = false
    state.isError = true
    state.message = action.payload
}) 
    }
})
export default adminSlice.reducer;



//fetch users

export const getAllUsers = createAsyncThunk("Fetch/Users",async(_,thunkAPI)=>{
    const token = thunkAPI.getState().auth.user.token
    // console.log(token)
    try {
        return await adminService.fetchAllUsers(token)
    } catch (error) {
        const message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)   
    }
})


export const getAllComplaints = createAsyncThunk("Fetch/Complaints",async(_,thunkAPI)=>{
    const token = thunkAPI.getState().auth.user.token
    // console.log(token)
    try {
        return await adminService.fetchAllComplaints(token)
    } catch (error) {
        const message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)   
    }
})