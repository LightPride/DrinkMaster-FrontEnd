import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth.operations';
import axios from 'axios';

export const getMainPageDrinks = createAsyncThunk(
  'drinks/getAll',
  async (quantity, thunkAPI) => {
    try {
      const res = await instance.get(
        `/drinks/mainpage?drinksPerCategory=${quantity}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPopularDrinks = createAsyncThunk(
  'drinks/getPopularDrinks',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('/drinks/popular');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearchedDrink = createAsyncThunk(
  'drinks/search',
  async ({ name, category, ingredient, page, size }, thunkAPI) => {
    const searchParams = {
      params: {
        name,
        category,
        ingredient,
        page,
        size,
      },
    };
    try {
      const res = await instance.get('/drinks/search', searchParams);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDrinkById = createAsyncThunk(
  'drinks/getDrinkById',
  async (drinkId, thunkAPI) => {
    try {
      const res = await instance.get(`/drinks/${drinkId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOwnDrink = createAsyncThunk(
  'drinks/own/add',
  async (data, thunkAPI) => {
    try {
      const res = await instance.post('/drinks/own/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeOwnDrink = createAsyncThunk(
  'drinks/own/remove/',
  async (drinkId, thunkAPI) => {
    try {
      const res = await instance.delete(`/drinks/own/remove/${drinkId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnDrinks = createAsyncThunk(
  'drinks/own',
  async ({ page, limit }, thunkAPI) => {
    // async ({ page, limit }, thunkAPI) => {
    try {
      const res = await instance.get(`drinks/own?page=${page}&limit=${limit}`);
      // `/drinks/own/all?page=${page}&limit=${limit}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getOwnDrinks = createAsyncThunk(
//   'drinks/own/',
//   async ({ page, limit }, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `drinks/own?page=${page}&limit=${limit}`
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const addDrinkToFavorite = createAsyncThunk(
  'drinks/favorite/add',
  async (_, thunkAPI) => {
    // async (drinkId, thunkAPI) => {
    try {
      const res = await instance.post(`/drinks/favorite/add`);
      // const res = await instance.post(`/drinks/favorite/add`);
      // const res = await axios.post('drinks/favorite/add/:id');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeDrinkFromFavorite = createAsyncThunk(
  'drinks/favorite/remove',
  async (drinkId, thunkAPI) => {
    try {
      const res = await instance.delete(`/drinks/favorite/remove/${drinkId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoriteAll = createAsyncThunk(
  'drinks/favorite/',
  async (_, thunkAPI) => {
    // async ({ page, limit }, thunkAPI) => {
    try {
      const res = await instance.get(`/drinks/favorite`);
      // `/drinks/favorite/all?page=${page}&limit=${limit}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
