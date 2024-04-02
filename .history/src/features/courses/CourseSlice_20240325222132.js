import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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


export const fetchCourse = createAsyncThunk(
    'course/fetchCourses',
    async(rejectWithValue)=>{
        try{
            const response = await findAll();
            return response.data;
        }catch(error){
            return  rejectWithValue(error.response.data);
        }
    }
)

export const edit  = createAsyncThunk(
    "course/edit",
    async({id,data},{rejectWithValue})=>{
        try{
            const response = updateCourse(id,data);
            console.log("data",response.data);
        }catch(error){
            return rejectWithValue(error.response.data);
        }
       
    }
);


const initialState = {
    course: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    pagination: {
      page: 0,
      size: 10,
      totalItems: 0,
      totalPages: 0,
    },
  };


  const courseSlice = createSlice({
    name: "module-course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCourse.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchCourse.fulfilled, (state, action) => {
          state.status = "success";
          state.course = action.payload.content;
          state.pagination = {
            ...state.pagination,
            page: action.payload.number,
            size: action.payload.size,
            totalItems: action.payload.totalElements,
            totalPages: action.payload.totalPages,
          };
        })
        .addCase(fetchCourse.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload.action;
          
        })
        .addCase(addCourse.fulfilled, (state, action) => {
          state.course = [...state.course, action.payload.data];
        })
        .addCase(deleteC.fulfilled, (state, action) => {
          const index = state.course.findIndex(
            (item) => item.id === action.payload
          );
          state.course.splice(index, 1);
        })
        .addCase(edit.fulfilled, (state, action) =>{
          const index = state.course.findIndex((item)=>item.id===action.payload.id)
          state.course[index]=action.payload;
        })
        .addCase(edit.rejected, (state, action) =>{
          state.
        });
    },
  });

  export default courseSlice.reducer;
