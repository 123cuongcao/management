import { configureStore } from "@reduxjs/toolkit";
import{students} from "../features/students/"

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});