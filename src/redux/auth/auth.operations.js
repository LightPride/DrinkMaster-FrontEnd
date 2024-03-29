import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';

const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const cleanAuthToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/signup', formData);
      setToken(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/signin', formData);
      setToken(data.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.post('/auth/signout');
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    } finally {
      cleanAuthToken();
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);
      const { data } = await instance.get('/users/current');
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);
