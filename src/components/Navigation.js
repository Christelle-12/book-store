import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import '../CSS/Navigation.css';
import profileImage from '../img/icons8-administrator-male-30.png';

const Navigation = () => {
  const myLinks = [
    { id: 1, text: 'Books', path: '/' },
    { id: 2, text: 'Categories', path: '/categories' },
  ];

  return (
    <header className="header">
      <div className="div-wrapper">
        <h1>Bookstore CMS</h1>
        <nav>
          <ul className="head-ul">
            {myLinks.map((link) => (
              <li
                key={link.id}
                className={`head-li ${
                  link.text === 'Books' ? 'books-link' : ''
                } ${link.text === 'Categories' ? 'categories-link' : ''}`}
              >
                <NavLink exact to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="profile-icon">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </header>
  );
};

export default Navigation;
