import { configureStore } from "@reduxjs/toolkit";
import empleadosReducer from "../features/empleados/empleadosSlice";

export const store = configureStore({
    reducer:{
        employed: empleadosReducer
    }
})