import { configureStore } from "@reduxjs/toolkit";
import{student} from './'

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});