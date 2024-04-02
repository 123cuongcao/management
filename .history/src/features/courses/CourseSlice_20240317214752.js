import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAll,deleteCourse,updateCourse, } from "./CourseAPI";

export const addCourse = createAsyncThunk(
    'course/add', 
    async (data,{rejectWithValue}) => {
        try{
            const response = await 
        }
    }
)