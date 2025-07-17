import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './userslice'
const appStore = configureStore({
    reducer:{
        user: UserSlice
    }
})

export default appStore