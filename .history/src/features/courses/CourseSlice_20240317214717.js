import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAll,delete } from "./CourseAPI";

export const addCourse = createAsyncThunk(
    'course/add', 
    async (data,{rejectWithValue}) => {
        try{
            const response = await 
        }
    }
)