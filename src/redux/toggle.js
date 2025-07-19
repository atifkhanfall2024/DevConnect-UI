import { createSlice } from "@reduxjs/toolkit";




const Toggle  = createSlice({
    name:'toggle',
    initialState:false,

    reducers:{
        toggle:(state , action)=>{
        return action.payload
        },
    }
})

export default Toggle.reducer
export const{toggle}  = Toggle.actions