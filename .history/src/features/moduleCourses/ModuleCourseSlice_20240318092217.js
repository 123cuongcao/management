import { createAsyncThunk } from '@reduxjs/toolkit';
import {save,edit,deleteMC,findAll} from './ModuleCourseAPI';
 export const add = createAsyncThunk(
    'modulecourse/add',
    
 )