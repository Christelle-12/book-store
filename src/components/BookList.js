import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = ({ deleteBookHandler }) => {
  const books = useSelector((state) => state.books);

  return (
    <section>
      {books.map((book) => (
        <Book
          key={book.item_id}
          book={book}
          deleteBookHandler={deleteBookHandler}
        />
      ))}
    </section>
  );
};

BookList.propTypes = {
  deleteBookHandler: PropTypes.func.isRequired,
};

export default BookList;
