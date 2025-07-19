import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './userslice'
import Toggle from "./toggle";
const appStore = configureStore({
    reducer:{
        user: UserSlice,
       toggle:Toggle
    }
})

export default appStore