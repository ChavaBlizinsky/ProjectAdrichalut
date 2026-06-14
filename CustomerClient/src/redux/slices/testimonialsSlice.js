import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: [],
  },
  reducers: {
    addTestimonial: (state, action) => {
      state.testimonials.push(action.payload);
    },
  },
});

export const { addTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;