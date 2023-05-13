import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const ShowBooks = () => {
  const [books, setBooks] = useState([
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Classic',
    },
    {
      item_id: 'item2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      category: 'Classic',
    },
    {
      item_id: 'item3',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      category: 'Classic',
    },
    {
      item_id: 'item4',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      category: 'Fantasy',
    },
    {
      item_id: 'item5',
      title: '1984',
      author: 'George Orwell',
      category: 'Dystopian',
    },
  ]);

  const deleteBookHandler = (id) => {
    const updatedBooks = books.filter((book) => book.item_id !== id);
    setBooks(updatedBooks);
  };

  const addBook = (name) => {
    const newBook = {
      item_id: `item${books.length + 1}`,
      title: name,
      author: 'Unknown',
      category: 'Unknown',
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBookHandler={deleteBookHandler} />
    </>
  );
};

export default ShowBooks;
