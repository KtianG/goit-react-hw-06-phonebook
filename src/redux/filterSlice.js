import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
