import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { findAll, deleteCourse, updateCourse, saveCourse,getClassFromCourse } from "./CourseAPI";

export const addCourse = createAsyncThunk(
  "course/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await saveCourse(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const fetchClassFromCourse = createAsyncThunk(
  "course/fetchClassFromCourse",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getClassFromCourse(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteC = createAsyncThunk(
  "course/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteCourse(id);
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchCourse = createAsyncThunk(
  "course/fetchCourses",
  async ({ page = 0, size = 10, keyword }, { rejectWithValue }) => {
    try {
      const response = await findAll(page, size, keyword);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const edit = createAsyncThunk(
  "course/edit",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updateCourse(id, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  course: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  pagination: {
    page: 0,
    size: 10,
    totalItems: 0,
    totalPages: 0,
  },
};

const courseSlice = createSlice({
  name: "module-course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.course = action.payload.content;
        state.pagination = {
          ...state.pagination,
          page: action.payload.number,
          size: action.payload.size,
          totalItems: action.payload.totalElements,
          totalPages: action.payload.totalPages,
        };
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.course = [...state.course, action.payload.data];
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(deleteC.fulfilled, (state, action) => {
        const index = state.course.findIndex(
          (item) => item.id === action.payload
        );
        state.course.splice(index, 1);
      })
      .addCase(edit.fulfilled, (state, action) => {
        state.error = null;
        const index = state.course.findIndex(
          (course) => course.id === action.payload.id
        );
        if (index !== -1) {
          state.course[index] = action.payload; // cập nhật khóa học tương ứng
        }
      })
      .addCase(edit.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchClassFromCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default courseSlice.reducer;
