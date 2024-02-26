import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth.operations';

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
