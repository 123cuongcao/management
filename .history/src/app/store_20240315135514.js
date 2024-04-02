import { configureStore } from "@reduxjs/toolkit";
import{students} from "../"

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});