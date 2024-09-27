import { configureStore } from "@reduxjs/toolkit";
import numReducer from './CreateSlice'

 const store=configureStore({
    reducer:{
        numbers:numReducer,
    }
    
 })

 export default store;