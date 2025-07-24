import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
    name:'feed',
    initialState:null,

    reducers:{
        addfeed:(state , action)=>{
               return action.payload
        },
        removefeed:(state , action)=>{
           const feedarr = state.filter((s)=> s._id !== action.payload)
           return feedarr
        }
    }
})


export default  FeedSlice.reducer
export const{addfeed , removefeed} = FeedSlice.actions