import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAll,deleteCourse,edit } from "./CourseAPI";

export const addCourse = createAsyncThunk(
    'course/add', 
    async (data,{rejectWithValue}) => {
        try{
            const response = await 
        }
    }
)