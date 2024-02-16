import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  authenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
