import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
});

// const {} = drinksSlice.actions;

export const drinksReducer = drinksSlice.reducer;
