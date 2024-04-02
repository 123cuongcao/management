import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAll,deleteCourse, } from "./CourseAPI";

export const addCourse = createAsyncThunk(
    'course/add', 
    async (data,{rejectWithValue}) => {
        try{
            const response = await 
        }
    }
)