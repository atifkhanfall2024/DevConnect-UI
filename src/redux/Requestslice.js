import { createSlice } from "@reduxjs/toolkit";

const RequestSlice = createSlice({
    initialState:null ,
    name:'Request',

    reducers:{
        addRequest:(state , actions)=>{
               return actions.payload
        },
        removeRequest:(state , actions)=>{
                return null
        }
    }
})


export default RequestSlice.reducer
export const {addRequest , removeRequest} = RequestSlice.actions