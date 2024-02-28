import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getCategories,
  getIngredients,
  getGlasses,
} from '..//filters/filters.operations';

const initialState = {
  searchQuery: '',
  categories: [],
  ingredients: [],
  glasses: [],
  isLoading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getCategories.pending,
          getIngredients.pending,
          getGlasses.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getCategories.rejected,
          getIngredients.rejected,
          getGlasses.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),

  reducers: {
    setSearchQuery: {
      reducer: (state, action) => {
        state.searchQuery = action.payload;
      },

      prepare: (searchQuery) => {
        return { payload: searchQuery };
      },
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
