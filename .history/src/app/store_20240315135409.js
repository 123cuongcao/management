import { configureStore } from "@reduxjs/toolkit";
import{userReducer, authReducers}from './slices'

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});