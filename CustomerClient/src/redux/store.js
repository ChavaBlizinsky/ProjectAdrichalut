import { configureStore } from '@reduxjs/toolkit';
import newsletterReducer from './slices/newsletterSlice';
import testimonialsReducer from './slices/testimonialsSlice';

const store = configureStore({
  reducer: {
    newsletter: newsletterReducer,
    testimonials: testimonialsReducer,
  },
});

export default store;