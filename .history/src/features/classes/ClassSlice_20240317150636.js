import {saveClass,deleteClass,getAllClasses,editClass} from './ClassAPI';
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

export const saveClass = createAsyncThunk(
    'class/save',
    async(class ,{rejectWithValue}) => {
    try{
        const response = await saveClass(class);
    }
}
);