import { configureStore } from "@reduxjs/toolkit";
import{students} from "../features/students/StudentSlice"
import {login} from "../features/auth/"

export const store = configureStore ({
    reducer: { 
        students
    },
});