// redux store configuration

import { configureStore } from '@reduxjs/toolkit';
// Import reducers from features or slices
import exampleSlice from '../features/exampleFeature/exampleSlice';

export const store = configureStore({
  reducer: {
    someFeature: exampleSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
