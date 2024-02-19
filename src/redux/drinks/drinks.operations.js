import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL back-end
axios.defaults.baseURL = 'https://drink-master-api-umd0.onrender.com/api';

export const getMainPageDrinks = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('api/drinks/mainpage');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPopularDrinks = createAsyncThunk(
  'drinks/getPopularDrinks',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/drinks/popular');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearcheddDrink = createAsyncThunk(
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
      const { data } = await axios.get('/api/drinks/search', searchParams);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDrinkById = createAsyncThunk(
  'drinks/getDrinkById',
  async (drinkId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/drinks/${drinkId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOwnDrink = createAsyncThunk(
  'drinks/own/add',
  async (data, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/drinks/own/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeOwnDrink = createAsyncThunk(
  'drinks/own/remove/:id',
  async (drinkId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/drinks/own/remove/${drinkId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnDrinks = createAsyncThunk(
  'drinks/own/all',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/drinks/own/all?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDrinkToFavorite = createAsyncThunk(
  'drinks/favorite/add/:id',
  async (drinkId, thunkAPI) => {
    try {
      const { data } = await axios.post(`/api/drinks/favorite/add/${drinkId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeDrink = createAsyncThunk(
  'drinks/favorite/remove/:id',
  async (drinkId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `/api/drinks/favorite/remove/${drinkId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoriteAll = createAsyncThunk(
  'drinks/favorite/all',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/drinks/favorite/all?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
