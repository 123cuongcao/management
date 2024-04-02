import login from "./authAPI";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user, {rejectWithValue }) => {
      try {
        const response = await login(user);
        // Lưu trữ token vào local storage hoặc cookies tại đây nếu cần
        localStorage.setItem('token', response.data.token);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  const initialState = {
    user: null,
    status: 'idle',
    error: null
  };
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      // Thêm reducers để xử lý clear error, logout, etc.
      logout(state) {
        state.user = null;
        localStorage.removeItem('token');
      }
    },
    extraReducers: {
      [loginUser.pending]: (state) => {
        state.status = 'loading';
      },
      [loginUser.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      },
      [loginUser.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      }
    }
  });
  
  export const { logout } = authSlice.actions;
  
  export default authSlice.reducer;