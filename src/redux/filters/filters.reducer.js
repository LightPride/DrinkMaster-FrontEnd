import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
});

// const {} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
