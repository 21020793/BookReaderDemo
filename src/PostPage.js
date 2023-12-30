import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import AniDetails from './AniDetails'
import Chapters from './Chapters'
import './Postpage.css'
import apiRequest from './apiRequest'

const PostPage = ({ API_URL, genres }) => {

  const { title } = useParams();
  const [book, setBook] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const getOptions = { method: 'GET' };
        const templatedData = `${API_URL}/book/${title}`;
        const response = await apiRequest(templatedData, getOptions);
        if (!response.ok) throw new Error('No expected data received');
        const Book = await response.json();
        setBook(Book);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    }

    setTimeout(() => {
      fetchItems();
    }, 2000)
  }, [])

  return (
    <main className='BookPage'>
      <article className='Book'>
        {book &&
          <div className='wrapper'>
            <AniDetails
              book={book}
            />
            <Chapters
              book={book}
              genres={genres}
            />
          </div>
        }
      </article>
    </main>
  )
}

export default PostPage