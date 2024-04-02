import { configureStore } from "@reduxjs/toolkit";
import{student, authReducers} from './'

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});