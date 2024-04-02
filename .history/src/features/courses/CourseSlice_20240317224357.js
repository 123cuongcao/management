import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAll,deleteCourse,updateCourse,saveCourse } from "./CourseAPI";

export const addCourse = createAsyncThunk(
    'course/add', 
    async (data,{rejectWithValue}) => {
        try{
            const response = await saveCourse(data);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteC = createAsyncThunk(
    "course/delete",
    async(id , {rejectWithValue})=>{
        try{
            const response = await  deleteCourse(id);
            console.log('data',response.data);
            return response.data;
        }catch(error){
            return  rejectWithValue("Could not delete the course");
        }
    }
)


export const getAll = createAsyncThunk(
    'course/fetchCourses',
    async(rejectWithValue)=>{
        try{
            const response = aw
        }
    }
)