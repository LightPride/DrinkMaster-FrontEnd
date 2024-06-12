import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  registerThunk,
  refreshThunk,
  logOutThunk,
} from './auth.operations';

const initialState = {
  userData: { name: '', email: '', avatarURL: '', id: '' },
  isLoading: false,
  error: null,
  registerError: null,
  authenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser(state, { payload: { name, avatarURL } }) {
      state.userData.name = name;
      state.userData.avatarURL = avatarURL;
    },
    clearToken(state) {
      state.token = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
        state.userData = payload.user;
      })
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(logOutThunk.rejected, () => {
        return initialState;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.registerError = payload;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.authenticated = true;
        state.userData = payload;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logOutThunk.pending,
          refreshThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          logOutThunk.rejected,
          refreshThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          state.token = null;
        }
      ),
});

export const authReducer = authSlice.reducer;
export const { clearToken, updateUser } = authSlice.actions;
