import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ addBook }) => {
  const inputRef = useRef();

  const submitBookHandler = (e) => {
    e.preventDefault();
    addBook(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={submitBookHandler}>
        <input ref={inputRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
