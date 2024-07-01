import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user_data:{}
}

const Loginslice=createSlice({
   name:"mylogdata",
   initialState:initialState,
   reducers:({
     adduser_data:(state, action)=>{
        state.user_data=action.payload
     }
   })
})

export const {adduser_data} = Loginslice.actions;
export default Loginslice.reducer;
