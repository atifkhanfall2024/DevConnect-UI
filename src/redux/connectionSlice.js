import { createSlice } from "@reduxjs/toolkit";

const ConnectionSlice = createSlice({
    initialState:null ,
    name:'connections',

    reducers:{
        addConnections:(state , actions)=>{
               return actions.payload
        },
        removeConnections:(state , actions)=>{
                return null
        }
    }
})


export default ConnectionSlice.reducer
export const {addConnections , removeConnections} = ConnectionSlice.actions