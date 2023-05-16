import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => state.filter((book) => book.item_id !== action.payload.id),
    updateBook: (state, action) => {
      const {
        id, title, author, category,
      } = action.payload;
      const bookToUpdate = state.find((book) => book.item_id === id);
      if (bookToUpdate) {
        bookToUpdate.title = title;
        bookToUpdate.author = author;
        bookToUpdate.category = category;
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
