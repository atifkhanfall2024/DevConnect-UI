import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
    name:'feed',
    initialState:null,

    reducers:{
        addfeed:(state , action)=>{
               return action.payload
        },
        removefeed:(state , action)=>{
           return null
        }
    }
})


export default  FeedSlice.reducer
export const{addfeed , removefeed} = FeedSlice.actions