import { configureStore } from "@reduxjs/toolkit";
import{students} from "../features/students/StudentSlice"
import {login} from "../"

export const store = configureStore ({
    reducer: { 
        students
    },
});