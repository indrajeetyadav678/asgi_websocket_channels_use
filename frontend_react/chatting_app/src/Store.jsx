 import {configureStore} from "@reduxjs/toolkit"
 import loginReducer from "./Loginslice"


 const Store=configureStore({
    reducer:{
        mylogdata: loginReducer
    }
 })
 export default Store;