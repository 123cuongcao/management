import { createAsyncThunk } from "@reduxjs/toolkit";
import {findAll} from "./TeacherAPI";

export const fetchTeacher = createAsyncThunk(
    'students/fetchStudents',
    async ({ page = 0, size = 10 ,keyword}, { rejectWithValue }) => {
      try {
        const response = await findAll(page,size,keyword);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


  const initialState = {
    students: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    pagination: {
      page: 0,
      size: 10,
      totalItems: 0,
      totalPages: 0,
    },
  };
  