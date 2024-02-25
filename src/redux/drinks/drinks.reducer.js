import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getMainPageDrinks,
  getPopularDrinks,
  getSearchedDrink,
  getDrinkById,
  addOwnDrink,
  removeOwnDrink,
  getOwnDrinks,
  addDrinkToFavorite,
  removeDrinkFromFavorite,
  getFavoriteAll,
} from './drinks.operations.js';

const initialState = {
  searchQuery: '',
  mainPageDrinks: [],
  drinks: [],
  favoriteDrinks: [],
  popularDrinks: [],
  isLoading: false,
  error: null,
  total: 0,
  ownDrinks: [],
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getMainPageDrinks.fulfilled, (state, action) => {
        state.mainPageDrinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPopularDrinks.fulfilled, (state, action) => {
        state.popularDrinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearchedDrink.fulfilled, (state, action) => {
        state.drinks = action.payload.drinks;
        state.total = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getDrinkById.fulfilled, (state, action) => {
        state.drinks = [action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addOwnDrink.fulfilled, (state, action) => {
        state.drinks = [action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeDrinkFromFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteDrinks = state.favoriteDrinks.filter(
          (drink) => drink._id === action.payload.result._id
        );
      })
      // .addCase(removeDrink.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.favoriteDrinks.findIndex(
      //     (drink) => drink._id === action.payload.result._id
      //   );
      //   state.favoriteDrinks.splice(index, 1);
      // })
      .addCase(getOwnDrinks.fulfilled, (state, action) => {
        state.ownDrinks = action.payload.ownDrinks;
        state.total = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDrinkToFavorite.fulfilled, (state, action) => {
        state.favoriteDrinks.push(action.payload.result);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeOwnDrink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.drinks = state.drinks.filter(
          (drink) => drink._id === action.payload.result._id
        );
      })
      // .addCase(removeOwnDrink.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.drinks.findIndex(
      //     (drink) => drink._id === action.payload.result._id
      //   );
      //   state.drinks.splice(index, 1);
      // })
      .addCase(getFavoriteAll.fulfilled, (state, action) => {
        state.favoriteDrinks = action.payload.favoriteDrinks;
        state.total = action.payload.total;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          getMainPageDrinks.pending,
          getPopularDrinks.pending,
          getSearchedDrink.pending,
          getDrinkById.pending,
          addOwnDrink.pending,
          removeOwnDrink.pending,
          getOwnDrinks.pending,
          addDrinkToFavorite.pending,
          removeDrinkFromFavorite.pending,
          getFavoriteAll.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          getMainPageDrinks.rejected,
          getPopularDrinks.rejected,
          getSearchedDrink.rejected,
          getDrinkById.rejected,
          addOwnDrink.rejected,
          removeOwnDrink.rejected,
          getOwnDrinks.rejected,
          addDrinkToFavorite.rejected,
          removeDrinkFromFavorite.rejected,
          getFavoriteAll.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const drinksReducer = drinksSlice.reducer;
