import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './userslice'
import Toggle from "./toggle";
import Feedslice from './Feedslice'
import ConnectionSlice from './connectionSlice'

const appStore = configureStore({
    reducer:{
        user: UserSlice,
       toggle:Toggle,
       feed:Feedslice,
       connection:ConnectionSlice
    }
})

export default appStore