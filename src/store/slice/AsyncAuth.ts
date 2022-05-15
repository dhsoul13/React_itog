/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser:any = createAsyncThunk(
  'users/fetchUser',
  async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await responce.json();
    return data;
  }
);
const userAsynceSlice = createSlice(
  {
    name: 'users',
    initialState: {
      users: [],
      status: '',
      error: '',
    },
    reducers: {
      add(state, action) {

      }
    },
    extraReducers: {
      [fetchUser.pending.toString()]: (state) => {
        state.status = 'loading';
        state.error = '';
      },
      [fetchUser.fulfilled.toString()]: (state, action) => {
        console.log(action.payload);
        state.status = 'complit';
        state.error = '';
        state.users = action.payload;
      },
      [fetchUser.rejected.toString()]: (state, action) => {
      },
    }
  }
);

export const { add } = userAsynceSlice.actions;
export default userAsynceSlice.reducer;
