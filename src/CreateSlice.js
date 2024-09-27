import { createSlice } from "@reduxjs/toolkit";

const initialState={
    number1:0,
    number2:0,
    sum:0
}
const slice=createSlice({
    name:'number',
    initialState,
    reducers:{
        setnumber1:(state,action)=>{
            state.number1=action.payload
        },
        setnumber2:(state,action)=>{
            state.number2=action.payload
        },
        sum:(state,action)=>{
            state.sum= state.number1+state.number2
        }
    }
})
export const {setnumber1,setnumber2,sum} = slice.actions;
export default slice.reducer;