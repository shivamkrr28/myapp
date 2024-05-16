import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value1:1
};

export const counterSlice1 = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment1:(state)=>{
            state.value1+=1;
        },
        decrement1:(state)=>{
            state.value1-=1;
        }

    }

});


// console.log("counter slice1==>",counterSlice1);

export const {increment1,decrement1}=counterSlice1.actions;

export default counterSlice1.reducer;