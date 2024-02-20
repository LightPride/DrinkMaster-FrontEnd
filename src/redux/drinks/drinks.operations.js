import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { selectAuthToken } from '../auth/auth.selectors';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDRhMzRmZTc2Yzg3YzEwODVkNGRiMSIsIm5hbWUiOiJEYXZ5IEpvbmVzMSIsImlhdCI6MTcwODQzNDMxMSwiZXhwIjoxNzEwMjQ4NzExfQ.rOBfDfto61kTTyT_CJ_Dg7vwHmoaMlOpZ9of-n7Otus';

export const instance = axios.create({
  baseURL: 'https://drink-master-api-umd0.onrender.com/api',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getMainPageDrinks = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkAPI) => {
    try {
      const res = await instance.get('/drinks/mainpage');
      console.log(res.data);
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
  async ({ query, category, ingredient, limit, page }, thunkAPI) => {
    const searchParams = {
      params: {
        query,
        category,
        ingredient,
        limit,
        page,
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
      console.log(res.data);
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
  'drinks/own/remove/:id',
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
  async (_, thunkAPI) => {
    // async ({ page, limit }, thunkAPI) => {
    try {
      const res = await instance.get(`/drinks/own`);
      // `/drinks/own/all?page=${page}&limit=${limit}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDrinkToFavorite = createAsyncThunk(
  'drinks/favorite/add',
  // 'drinks/favorite/add/:id',
  async (_, thunkAPI) => {
    // async (drinkId, thunkAPI) => {
    try {
      const res = await instance.post(`/drinks/favorite/add`);
      // const res = await axios.post('drinks/favorite/add/:id');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeDrink = createAsyncThunk(
  'drinks/favorite/remove/:id',
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
  'drinks/favorite',
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
