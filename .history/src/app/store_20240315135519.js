import { configureStore } from "@reduxjs/toolkit";
import{students} from "../features/"

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});