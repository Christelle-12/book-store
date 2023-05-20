import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import { deleteBook, getBooks } from '../redux/books/booksSlice';
import '../CSS/button.css';

const ButtonComp = () => {
  const { books, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const renderLoader = () => <div>Loading...</div>;

  const renderError = () => <div>Please try again later...</div>;

  const handleProgressUpgrade = () => {
    setProgress(70);
  };

  const renderBooks = () => books.map((book) => {
    const { itemId, title, author } = book;

    return (
      <div key={itemId} className="bk-card">
        <div className="card1-info">
          <p className="bk-title">{title}</p>
          <p className="bk-author">{author}</p>
          <ul className="butt-li">
            <li>
              <button type="button">Comments</button>
            </li>
            <li>
              <button
                type="button"
                className="remove"
                onClick={() => dispatch(deleteBook(itemId))}
              >
                Remove
              </button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="card2-progr">
          <p className="oval">
            <CircularProgressbar
              value={progress}
              className="custom-progress"
            />
          </p>

          <p className="progr-per">
            {progress}
            %
            {' '}
            <br />
            <span>
              Completed
            </span>

          </p>
          <p className="comp" />

        </div>
        <div className="card3-curr">
          <p className="cur-word">CURRENT CHAPTER</p>
          <p className="chap">Chapter 17</p>
          <button
            type="button"
            className="upgrade"
            onClick={handleProgressUpgrade}
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    );
  });

  const renderContent = () => {
    if (loading) {
      return renderLoader();
    }
    if (error) {
      return renderError();
    }
    return renderBooks();
  };

  return <div>{renderContent()}</div>;
};

export default ButtonComp;
