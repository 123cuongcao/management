import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findAll, save, edit } from "./TeacherAPI";

export const fetchTeacher = createAsyncThunk(
  "teachers/fetchTeachers",
  async ({ page = 0, size = 10, keyword }, { rejectWithValue }) => {
    try {
      const response = await findAll(page, size, keyword);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addTeacher = createAsyncThunk(
  "teacher/addTeacher",
  async (teacherData, { rejectWithValue }) => {
    try {
      const res = await save(teacherData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.res.data);
    }
  }
);

export const editTeacher = createAsyncThunk(
  "teacher/editTeacher",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await edit(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  teachers: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  pagination: {
    page: 0,
    size: 10,
    totalItems: 0,
    totalPages: 0,
  },
};

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeacher.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teachers = action.payload.content;
        state.pagination = {
          ...state.pagination,
          page: action.payload.number,
          size: action.payload.size,
          totalItems: action.payload.totalElements,
          totalPages: action.payload.totalPages,
        };
      })
      .addCase(fetchTeacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.teachers.push(action.payload.data);
      })
      .addCase(addTeacher.rejected, (state, action) => {
        state.error = action.payload;
      });
      addCase(editTeacher.fulfilled,(state,action)=>{
        error.
        state
      })
  },
});

export const all = (state) => state.teachers.teachers;
export const errors = (state) => state.teachers.error;

export default teacherSlice.reducer;
