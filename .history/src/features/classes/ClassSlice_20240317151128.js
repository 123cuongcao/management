import {saveClass,deleteClass,getAllClasses,editClass} from './ClassAPI';
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

export const save = createAsyncThunk(
    'class/save',
    async(class ,{rejectWithValue}) => {
    try{
        const response = await saveClass(class);
        console.log("data",response.data);
        return response.data;
    }catch(error){
        return  rejectWithValue(error.response.data);
    }
}
);
const initialState = {
    class:[] ,
    status: 'idle',
    error: null
  };

  export const ClassSlice = createSlice