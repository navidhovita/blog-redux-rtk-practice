import { createSlice } from "@reduxjs/toolkit";

interface StateType{
    value: number;
}

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers:{
        increment: (state: StateType) => {
            state.value = state.value + 1;
        },
        decrement: (state: StateType) => {
            state.value = state.value - 1;
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice;