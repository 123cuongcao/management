import {saveClass,deleteClass,getAllClasses,editClass} from './ClassAPI';
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

export const saveNewClass = createAsyncThunk(
    'classes/saveNewClass', 
    async(classData,)
)

export const deleteC  = createAsyncThunk(
    'classes/deleteClass',
    async (classId, { rejectWithValue }) => {
      try {
        const response = await deleteClass(classId);
        console.log("data",response.data)
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
const initialState = {
    class:[] ,
    status: 'idle',
    error: null
  };

  export const ClassSlice = createSlice({
    name :'class',
    initialState,
    extraReducers:builder =>{
        builder.addCase(save.pending,(state)=>{
            state.status='loading';
    });
    builder.addcase()
  })