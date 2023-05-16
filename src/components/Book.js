import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, deleteBookHandler, editBookHandler }) => {
  const handleDelete = () => {
    deleteBookHandler(book.item_id);
  };

  const handleEdit = () => {
    editBookHandler(book.item_id);
  };

  return (
    <section>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.category}</p>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </li>
        <li>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </li>
      </ul>
    </section>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBookHandler: PropTypes.func.isRequired,
  editBookHandler: PropTypes.func.isRequired,
};

export default Book;
