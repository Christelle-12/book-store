import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ addBook }) => {
  const titleRef = useRef();
  const authorRef = useRef();

  const addBookHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    if (title && author) {
      const book = {
        title,
        author,
      };
      addBook(book);
      titleRef.current.value = '';
      authorRef.current.value = '';
    }
  };

  return (
    <div>
      <form onSubmit={addBookHandler}>
        <div>
          <label htmlFor="title">
            <p>Title:</p>
            <input type="text" id="title" ref={titleRef} />
          </label>
        </div>
        <div>
          <label htmlFor="author">
            <p>Author:</p>
            <input type="text" id="author" ref={authorRef} />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
