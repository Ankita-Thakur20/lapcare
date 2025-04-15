import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import complaintService from "./complaintService";

const complaintSlice = createSlice({
    name: "complaint",
    initialState :{
        complaints : [],
        singleComplaint : {},
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : ""

    },
    reducers :{},
    extraReducers :(builder)=>{
       builder
       //all complaints get
       .addCase(getComplaints.pending,(state,action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
    }) 
    .addCase(getComplaints.fulfilled,(state,action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.complaints = action.payload
        state.isError = false

    }) 

    .addCase(getComplaints.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
    }) 

     //single complaint
    .addCase(getComplaint.pending,(state,action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
    }) 
    .addCase(getComplaint.fulfilled,(state,action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.singleComplaint = action.payload
        state.isError = false

    }) 

    .addCase(getComplaint.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
    }) 


    //add complaint
    .addCase(raiseComplaint.pending,(state,action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
    }) 
    .addCase(raiseComplaint.fulfilled,(state,action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.complaints = [action.payload, ...state.complaints]
        state.isError = false

    }) 

    .addCase(raiseComplaint.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
    }) 

    //update complaint

    .addCase(closeComplaint.pending,(state,action)=>{
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
    }) 
    .addCase(closeComplaint.fulfilled,(state,action)=>{
        state.isLoading = false
        state.isSuccess = true
        state.singleComplaint = action.payload
        state.isError = false

    }) 

    .addCase(closeComplaint.rejected,(state,action)=>{
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
    }) 


    }
})

export default complaintSlice.reducer

//get complaints

export const getComplaints = createAsyncThunk("fetch/complaints",async(_,thunkAPI)=>{
const token = thunkAPI.getState().auth.user.token
// console.log(token)
    try {
    return await complaintService.fetchComplaints(token)
    } catch (error) {
        const message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)   
    }
})


//get singleComplaint

export const getComplaint = createAsyncThunk("fetch/complaint",async(id,thunkAPI)=>{
    const token = thunkAPI.getState().auth.user.token
    // console.log(token)
        try {
        return await complaintService.fetchComplaint(id , token)
        } catch (error) {
            const message = error.response.data.msg
            return thunkAPI.rejectWithValue(message)   
        }
    })

//add complaint
export const raiseComplaint = createAsyncThunk("add/complaint",async(formData,thunkAPI)=>{
    const token = thunkAPI.getState().auth.user.token
    // console.log(token)
        try {
        return await complaintService.addComplaint(formData , token)
        } catch (error) {
            const message = error.response.data.msg
            return thunkAPI.rejectWithValue(message)   
        }
    })


    //update complaint status
    export const  closeComplaint = createAsyncThunk("close/complaint",async(id,thunkAPI)=>{
        const token = thunkAPI.getState().auth.user.token
        // console.log(token)
            try {
            return await complaintService.updateComplaint(id , token)
            } catch (error) {
                const message = error.response.data.msg
                return thunkAPI.rejectWithValue(message)   
            }
        })