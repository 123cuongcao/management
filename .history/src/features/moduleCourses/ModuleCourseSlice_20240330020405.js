import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { save, edit, deleteMC, findAll } from "./ModuleCourseAPI";

export const add = createAsyncThunk(
  "module-course/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await save(data);
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const update = createAsyncThunk(
  "module-course/update",
  async (id, data, { rejectWithValue }) => {
    try {
      const response = await edit(id, data);
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteM = createAsyncThunk(
  "module-course/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteMC(id);
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchModuleCourse = createAsyncThunk(
  "module-course/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await findAll();
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  moduleCourse: [],
  status: "idle",
  error: null,
};

const moduleCourseSlice = createSlice({
  name: "module-course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModuleCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchModuleCourse.fulfilled, (state, action) => {
        state.status = "success";
        state.moduleCourse = action.payload.content;
      })
      .addCase(fetchModuleCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(add.fulfilled, (state, action) => {
        state.moduleCourse = [...state.moduleCourse, action.payload.data];
      })
      .addCase(add.re, (state, action) => {
        state.moduleCourse = [...state.moduleCourse, action.payload.data];
      })
      .addCase(deleteM.fulfilled, (state, action) => {
        const index = state.moduleCourse.findIndex(
          (item) => item.id === action.payload
        );
        state.moduleCourse.splice(index, 1);
      })
      .addCase(update.fulfilled, (state, action) =>{
        const index = state.moduleCourse.findIndex((item)=>item.id===action.payload.id)
        state.moduleCourse[index]=action.payload;
      });
  },
});

export default  moduleCourseSlice.reducer;
export const selectAllModuleCourse = state =>state.moduleCourse.moduleCourse;
