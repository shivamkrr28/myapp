import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
    isloading:true,
    userapidata:[]
};

export const fetchapi = createAsyncThunk("fetchapi",async ()=>{
    console.log("action working=>");
    const result = await fetch("https://dummyjson.com/products/1");
    return result.json();

  //  console.log(result.json());
});

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            console.log("inc=>",action);
            state.value+=action.payload;
        },
        increment2:(state,action)=>{
            console.log("inc=>",action);
            state.value+=action.payload;
        },
        decrement:(state,action)=>{
            console.log("dec=>",action.payload);
            state.value-=1;
        }    
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchapi.fulfilled,(state,action)=>{
          //  console.log(action);
            state.isloading=false;
            state.userapidata = action.payload;
        });
    }

});

// console.log("counter slice==>",counterSlice);

export const {increment,increment2,decrement,incrementByValue, update}=counterSlice.actions;

export default counterSlice.reducer;