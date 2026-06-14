import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
  },
  reducers: {
    setBlogPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setBlogPosts } = blogSlice.actions;
export default blogSlice.reducer;