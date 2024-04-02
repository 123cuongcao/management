import saveClass,deleteClass,getAllClasses,editClass from './ClassAPI';
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

export const  save = createAsyncThunk('class/save',saveClass);