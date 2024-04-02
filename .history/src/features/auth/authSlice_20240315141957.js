

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user, { rejectWithValue }) => {
      try {
        const response = await login(user);
        // Lưu trữ token vào local storage hoặc cookies tại đây nếu cần
        // localStorage.setItem('token', response.data.token);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );