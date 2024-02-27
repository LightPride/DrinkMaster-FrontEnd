import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';
import Notiflix from 'notiflix';

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
      const response = await instance.post(`/users/subscribe`, {
        email: email,
      });
      if (response) {
        Notiflix.Notify.success('Subscription is successful. Check your mail.');
      }
      return response;
    } catch (e) {
      Notiflix.Notify.warning('User with this email is already subscribed');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
