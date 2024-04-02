import { configureStore } from "@reduxjs/toolkit";
import{student} 

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});