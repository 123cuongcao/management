import { configureStore } from "@reduxjs/toolkit";
import{userReducer, authReducers} from './'

export const store = configureStore ({
    reducer: { 
        students:studentsReducer,
    },
});