import {configureStore} from "@reduxjs/toolkit";

import productReduser from "../UserSlice/UserSlice"
const store=configureStore({
    reducer:{
        app: productReduser
    }
})

export default store;
export type RootState =ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch