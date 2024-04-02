import {saveClass,deleteClass,getAllClasses,editClass} from './ClassAPI';
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

export const saveNewClass = createAsyncThunk(
    'classes/saveNewClass', 
    async(classData,{rejectWithValue}) =>{
        try{
            const response = await saveClass(classData);
            console.log("data",response.data);
            return response.data
        }catch(error){
            return rejectWithValue(error.response.data);
        }
    } 
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


  export const edit = createAsyncThunk(
    'classes/edit',
    async(classId,classData,{rejectWithValue}) =>{
        try{
            const response = await edit(classId,classData);
            console.log("data",response.data);
            return response.data;
        }catch(error){
            return  rejectWithValue('Error in editing the class');
        }
    }
  );

  export const fetchClass = createAsyncThunk(
    'classes/fetchClasses',
    async(_,{rejectWithValue}) =>{
        try{
            const response = await  getAll();
            console.log("data",response.data)
            return response.data;
        }catch(error){
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
    reducers:{},
    extraReducers:builder =>{
        builder
        .addCase(fetchClass.pending,state =>{})
  })