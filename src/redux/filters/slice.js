import { createSlice } from '@reduxjs/toolkit';

const filtersContactsSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersContactsSlice.actions;

export default filtersContactsSlice.reducer;
