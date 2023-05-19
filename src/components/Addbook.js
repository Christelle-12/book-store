import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const initialState = {
    title: '',
    author: '',
    category: '',
  };

  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...values,
      item_id: uuidv4(),
    };
    dispatch(addBook(newBook));
    setValues(initialState);
  };

  return (
    <section>
      <h2>Insert Book</h2>
      <form>
        <input
          value={values.title}
          type="text"
          name="title"
          placeholder="Add title"
          onChange={handleChange}
        />
        <br />
        <input
          value={values.author}
          type="text"
          name="author"
          placeholder="Name Author"
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={handleSubmit} className="btnAdd">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddBook;
