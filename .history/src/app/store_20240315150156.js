import { configureStore } from "@reduxjs/toolkit";
importstudents from "../features/students/StudentSlice"
import login from "../features/auth/authSlice"

export const store = configureStore ({
    reducer: { 
        students,
        login
    },
});