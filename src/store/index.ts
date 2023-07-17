import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import blogSlice from "./slices/blogSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        blog: blogSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;