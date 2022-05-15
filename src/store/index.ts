import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slice/AuthSlice';
import userAsynceSlice from './slice/AsyncAuth';

const store = configureStore(
  {
    reducer: {
      Auth: AuthReducer,
      // User: userAsynceSlice
    }
  },
);

export default store;
