import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks, deleteBook } from '../redux/books/booksSlice';

const BooksDisplay = () => {
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <div key={book.item_id}>
            <Book book={book} deleteBookHandler={handleDeleteBook} />
          </div>
        ))
      )}
    </div>
  );
};

export default BooksDisplay;
