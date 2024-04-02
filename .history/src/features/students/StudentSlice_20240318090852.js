import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '/src/common/api/axiosConfig';

// Async thunk cho việc lấy danh sách học sinh
export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/students');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk cho việc thêm học sinh mới
export const addStudent = createAsyncThunk(
  'students/addStudent',
  async (studentData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/students', studentData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk cho việc xóa học sinh dựa trên id
export const deleteStudent = createAsyncThunk(
  'students/deleteStudent',
  async (studentId, { rejectWithValue }) => {
    try {
      await axios.delete(`/students/${studentId}`);
      return studentId;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  students: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStudents.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(
          student => student.id !== action.payload
        );

      });
    // Xử lý thêm error và pending states cho addStudent và deleteStudent nếu cần
  },
});

// Export các actions nếu cần custom actions

// Export selector nếu bạn muốn sử dụng trong các components
export const selectAllStudents = state => state.students.;

// Export reducer
export default studentsSlice.reducer;
