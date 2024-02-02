import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Optionally, add an action to set a specific value
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = exampleSlice.actions;

export default exampleSlice.reducer;
