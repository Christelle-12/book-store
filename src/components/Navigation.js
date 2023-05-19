import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const myLinks = [
    { id: 1, text: 'Books', path: '/' },
    { id: 2, text: 'Categories', path: '/categories' },
  ];

  const { books } = useSelector((state) => state.books);
  const bookCount = books.length;

  return (
    <header>
      <h1>BOOK STORE APP</h1>
      <nav>
        <ul>
          {myLinks.map((link) => (
            <li key={link.id}>
              <NavLink exact to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <span className="bookCount">{bookCount}</span>
    </header>
  );
};

export default Navigation;
