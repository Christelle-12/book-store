import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/books/booksSlice';

const ButtonComp = () => {
  const { books, Loading, Error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const renderLoader = () => <div>Loading...</div>;

  const renderError = () => <div>please try again later,,,</div>;

  const renderBooks = () => books.map((book) => {
    const {
      // eslint-disable-next-line camelcase
      item_id,
      title,
      author,
    } = book;
    return (
    // eslint-disable-next-line camelcase
      <div key={item_id}>
        <div>
          <p>
            <b>TITLE :</b>
            <br />
            {title}
          </p>
          <p>
            <b>AUTHOR :</b>
            <br />
            {author}
          </p>
          <ul>
            <li>
              <button type="button">Comments</button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => dispatch(deleteBook(item_id))}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  });

  const renderContent = () => {
    if (Loading) {
      return renderLoader();
    }
    if (Error) {
      return renderError();
    }
    return renderBooks();
  };

  return <div>{renderContent()}</div>;
};

export default ButtonComp;
