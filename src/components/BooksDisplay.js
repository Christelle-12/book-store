import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';

const BooksDisplay = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <Book
            book={book}
            deleteBookHandler={handleDeleteBook}
          />
        </div>
      ))}
    </div>
  );
};

export default BooksDisplay;
