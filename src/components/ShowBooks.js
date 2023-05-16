import React from 'react';
import { useDispatch } from 'react-redux';
import BookForm from './BookForm';
import BooksDisplay from './BooksDisplay';
import { addBook } from '../redux/books/booksSlice';

const ShowBooks = () => {
  const dispatch = useDispatch();

  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  return (
    <div>
      <BookForm addBook={handleAddBook} />
      <BooksDisplay />
    </div>
  );
};

export default ShowBooks;
