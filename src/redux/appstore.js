import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './userslice'
import Toggle from "./toggle";
import Feedslice from './Feedslice'

const appStore = configureStore({
    reducer:{
        user: UserSlice,
       toggle:Toggle,
       feed:Feedslice
    }
})

export default appStore