import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import counterSlice1 from "../features/counter/counterSlice1";

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        counter1:counterSlice1,
        mystore:counterSlice
    },
});

export const store2 = configureStore({
    reducer:{
        counter0:counterSlice
    },
});  