import { configureStore } from "@reduxjs/toolkit";
import students from "../features/students/StudentSlice"
import login from "../features/auth/authSlice"
import students from "../features/students/StudentSlice"

export const store = configureStore ({
    reducer: { 
        students,
        login
    },
});