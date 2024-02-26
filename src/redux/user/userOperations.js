import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (newUser, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/users/update`, newUser, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const subscribeEmail = createAsyncThunk(
  'users/subscribeEmail',
  async (email, thunkAPI) => {
    try {
      const { data } = await instance.post(`/users/subscribe`, {
        email: email,
      });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
