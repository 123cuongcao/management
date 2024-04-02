import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAll, } from "./CourseAPI";

export const addCourse = createAsyncThunk(
    'course/add', 
    async (data,{rejectWithValue}) => {
        try{
            const response = await 
        }
    }
)