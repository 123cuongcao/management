import { configureStore } from "@reduxjs/toolkit";
import{userReducer, authReducers}

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});