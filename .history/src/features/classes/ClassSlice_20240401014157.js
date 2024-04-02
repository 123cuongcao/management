import { saveClass, deleteClass,getStudentByClassId, findAllNoPage, editClass, findAll,findById } from "./ClassAPI";
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


export const getStudentByClass = createAsyncThunk(
  "classes/getStudentByClass",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getStudentByClassId(id);
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
      console.log("datadelete", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const edit = createAsyncThunk(
  "classes/edit",
  async ({classId, classData}, { rejectWithValue }) => {
    try {
      const response = await editClass(classId, classData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchClass = createAsyncThunk(
  "classes/fetchClasses",
  async ({ page = 0, size = 10 }, { rejectWithValue }) => {
    try {
      const response = await findAll(page, size);
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const findByClassId = createAsyncThunk(
  "classes/findByID",
  async( id , { rejectWithValue }) => {
    try{
      const response = await findById(id);
      console.log("data",response.data);
    }catch(error){
      return rejectWithValue( error.response.data );
    }
  }
);

const initialState = {
  class: [],
  status: "idle",
  error: null,
  pagination: {
    page: 0,
    size: 10,
    totalItems: 0,
    totalPages: 0,
  },
};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    setCurrentEditingClass(state, action){
      // action.payload sẽ chứa thông tin lớp học bạn cần chỉnh sửa
      state.currentEditingClass = action.payload;
   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClass.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClass.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.class = action.payload.content;
        state.pagination = {
          ...state.pagination,
          page: action.payload.number,
          size: action.payload.size,
          totalItems: action.payload.totalElements,
          totalPages: action.payload.totalPages,
        };

      })
      .addCase(fetchClass.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteC.fulfilled, (state, action) => {
        state.status  = "idle" ;
        state.class = state.class.filter(cls => cls.id !== action.payload.data);
      })
      .addCase(saveNewClass.fulfilled, (state, action) => {
        state.class.push(action.payload);
      })
      .addCase(edit.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error=null;
        const index = state.class.findIndex(
          (cls) => cls.id === action.payload.id
        );
        if (index !== -1) {
          state.class[index] = action.payload;
        }
      })
      .addCase(edit.rejected, (state, action) =>{
        state.status = "failed";
        state.error = action.payload;
      });
      .addCase(saveNewClass.fulfilled, (state, action) => {
        state.class.push(action.payload);
      })

  },
});

export const selectAllClass = (state) => state.class.class;

export default classSlice.reducer;
