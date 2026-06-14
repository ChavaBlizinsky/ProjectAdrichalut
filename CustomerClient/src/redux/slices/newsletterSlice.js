import { createSlice } from '@reduxjs/toolkit';

const newsletterSlice = createSlice({
  name: 'newsletter',
  initialState: {
    emails: [],
  },
  reducers: {
    addToNewsletter: (state, action) => {
      state.emails.push(action.payload);
    },
  },
});

export const { addToNewsletter } = newsletterSlice.actions;
export default newsletterSlice.reducer;