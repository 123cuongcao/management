import { saveClass, deleteClass, findAllNoPage, editClass } from "./ClassAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveNewClass = createAsyncThunk(
  "classes/saveNewClass",
  async (classData, { rejectWithValue }) => {
    try {
      const response = await saveClass(classData);
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteC = createAsyncThunk(
  "classes/deleteClass",
  async (classId, { rejectWithValue }) => {
    try {
      const response = await deleteClass(classId);
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const edit = createAsyncThunk(
  "classes/edit",
  async (classId, classData, { rejectWithValue }) => {
    try {
      const response = await editClass(classId, classData);
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Error in editing the class");
    }
  }
);

export const fetchClass = createAsyncThunk(
  "classes/fetchClasses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await findAllNoPage();
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  class: [],
  status: "idle",
  error: null,
};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClass.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClass.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.class = action.payload;
      })
      .addCase(fetchClass.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteC.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.class.push(action.payload);
      })
      .addCase(saveNewClass.fulfilled,(state,action)=>{
        state.class.push(action.payload);
      })
      .addCase(edit.fulfilled, (state, action) => { // Xử lý action edit
        state.status = "succeeded";
        const index = state.class.findIndex((cls) => cls.id === action.payload.id);
        if (index !== -1) {
          state.class[index] = action.payload;
        }
      });
  },
});

export const select
export  default classSlice.reducer;