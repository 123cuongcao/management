import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findAll,save } from "./TeacherAPI";

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

export const add = createAsyncThunk(
  "teacher/addTeacher",
  async(teacherData,{rejectWithValue})=>{
    try{
      const res = await save(teacherData);
      return res.data;
    }catch(err){
      return rejectWithValue(err.res.data)
    }
  }
)

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
      });
    // Xử lý thêm error và pending states cho addStudent và deleteStudent nếu cần
  },
});

export const all = (state) => state.teachers.teachers;
export const errors = (state) => state.teachers.error;

export default teacherSlice.reducer;
