import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchModuleCourse = 
