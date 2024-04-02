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

export const delete = createAsyncThunk(
    'auth/loginUser',
    async (user, { rejectWithValue }) => {
      try {
        const response = await login(user);
        console.log("user",response.data)
        // Lưu trữ token vào local storage hoặc cookies tại đây nếu cần
        localStorage.setItem('token', response.data);
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