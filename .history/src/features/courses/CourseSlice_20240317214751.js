import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAll,deleteCourse,upda, } from "./CourseAPI";

export const addCourse = createAsyncThunk(
    'course/add', 
    async (data,{rejectWithValue}) => {
        try{
            const response = await 
        }
    }
)