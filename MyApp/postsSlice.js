import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removePost: (state, action) => {
      return state.filter(post => post.id !== action.payload.id);
    }
  }
});

export const { addPost, updatePost, removePost } = postsSlice.actions;

export default postsSlice.reducer;
