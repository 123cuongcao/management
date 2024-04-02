import { configureStore } from "@reduxjs/toolkit";
import{students} from "../features/students/StudentSlice"

export const store = configureStore ({
    reducer: { 
        students,
    },
});