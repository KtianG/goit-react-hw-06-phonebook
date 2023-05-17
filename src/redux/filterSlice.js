import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setQueryFilter(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQueryFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
