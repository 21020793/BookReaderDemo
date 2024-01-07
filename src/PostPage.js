import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AniDetails from './AniDetails';
import Chapters from './Chapters';
import './Postpage.css';

const PostPage = ({ API_URL, genres }) => {
  const { title } = useParams();
  const [book, setBook] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/book${title}`);
        if (!response.ok) throw new Error('No expected data received');
        const books = await response.json();
        setBook(books);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 100);
  }, []);

  return (
    <main className="BookPage">
      <article className="Book">
        {loading && <p style={{ color: 'green' }}>Loading items...Please wait!</p>}
        {!fetchError && !loading && (
          <div className="wrapper">
            <AniDetails book={book} />
            <Chapters book={book} genres={genres} />
          </div>
        )}
      </article>
    </main>
  );
};

export default PostPage;