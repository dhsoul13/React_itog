/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Auth: {
    isAuth: false,
    isAdmin: false,
    name: '',
    email: '',
    token: null,
    id: null,
  }
};
const AuthSlice = createSlice(
  {
    name: 'Auth',
    initialState,
    reducers: {
      setUser(state, action) {
        state.Auth.email = action.payload.email;
        state.Auth.token = action.payload.token;
        state.Auth.id = action.payload.id;
      },
      addAuth(state, action) {
        state.Auth.id = action.payload.id;
        state.Auth.isAuth = action.payload.isAuth;
        state.Auth.isAdmin = action.payload.isAdmin;
        state.Auth.name = action.payload.name;
        state.Auth.email = action.payload.email;
        state.Auth.token = action.payload.token;
      },
      removeAuth(state, action) {
        state.Auth.isAuth = false;
        state.Auth.isAdmin = false;
        state.Auth.name = '';
        state.Auth.email = '';
        state.Auth.token = null;
        state.Auth.id = null;
      }
    }
  }
);

export const { addAuth, removeAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
