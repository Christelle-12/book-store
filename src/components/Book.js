import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../CSS/book.css';

const Book = ({ book, deleteBookHandler, editBookHandler }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(book.title);
  const [editedAuthor, setEditedAuthor] = useState(book.author);

  const handleDelete = () => {
    deleteBookHandler(book.item_id);
  };

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      editBookHandler(book.item_id, editedTitle, editedAuthor);
    }
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setEditedAuthor(e.target.value);
  };

  return (
    <section className="wrapper">
      <h2>
        {isEditing ? (
          <input type="text" value={editedTitle} onChange={handleTitleChange} />
        ) : (
          book.title
        )}
      </h2>
      <h3>
        {isEditing ? (
          <input type="text" value={editedAuthor} onChange={handleAuthorChange} />
        ) : (
          book.author
        )}
      </h3>
      <p>{book.category}</p>
      <ul className="ul-but">
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button type="button" onClick={handleEdit}>
            {isEditing ? 'Save' : 'Edit'}
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
