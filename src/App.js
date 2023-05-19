import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import Book from './components/Book';
import CategoriesPage from './components/CategoriesPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
