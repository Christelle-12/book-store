import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, deleteBookHandler }) => (
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

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteBookHandler: PropTypes.func.isRequired,
};

export default BookList;
