import { createSlice } from "@reduxjs/toolkit";

const RequestSlice = createSlice({
    initialState:null ,
    name:'Request',

    reducers:{
        addRequest:(state , actions)=>{
               return actions.payload
        },
        removeRequest:(state , actions)=>{
            const reqarr = state.filter((s)=> s._id !== actions.payload)
            return reqarr
        }
    }
})


export default RequestSlice.reducer
export const {addRequest , removeRequest} = RequestSlice.actions