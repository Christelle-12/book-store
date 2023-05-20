import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import '../CSS/Addbook.css';

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
      itemId: uuidv4(),
    };
    dispatch(addBook(newBook));
    setValues(initialState);
  };

  return (
    <section className="sect-add">
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form className="add-form">
        <input
          value={values.title}
          type="text"
          name="title"
          placeholder="Add title"
          onChange={handleChange}
          className="inpt-txt"
        />
        <select
          value={values.category}
          name="category"
          onChange={handleChange}
          className="selectcat"
        >
          <option value="">Category</option>
          <option value="Horror">Horror</option>
          <option value="Religious">Religious</option>
          <option value="Adventure">Adventure</option>
        </select>
        <br />
        <button type="submit" onClick={handleSubmit} className="Addbtn">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddBook;
