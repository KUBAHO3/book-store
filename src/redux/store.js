import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
