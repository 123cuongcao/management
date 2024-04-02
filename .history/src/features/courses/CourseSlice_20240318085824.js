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
            return  rejectWithValue(error.response.data);
        }
    }
)


export const getAll = createAsyncThunk(
    'course/fetchCourses',
    async(rejectWithValue)=>{
        try{
            const response = await  findAll();
            console.log("data",response.data);
            return response.data;
        }catch(error){
            return  rejectWithValue(error.response.data);
        }
    }
)

export const edit  = createAsyncThunk(
    "course/edit",
    async(id,data,{rejectWithValue})=>{
        try{
            const response = updateCourse(id,data);
            console.log("data",response.data);
        }catch(error){
            return rejectWithValue(error.response.data);
        }
       
    }
);

