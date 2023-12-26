import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import BookItem_h from './BookItem_h';
import './SearchPage.css';

const SearchPage = ({ genres }) => {

  const location = useLocation();
  const heading = location.state.query;
  const API_URL = '';
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(null)


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${heading}`)
        if (!response.ok) throw new Error("Could not find the search results")
        const listItems = await response.json();
        setBooks(listItems);
        setFetchError(null);
      }
      catch (error) {
        setFetchError(error.message);
      }
    }
  }, []);

  return (
    <div className='SearchWrapper'>
      <div className='SContainer'>
        <div className='mw-2col'>
          <div className='SMainContent'>
            <section className='Category-area'>
              <div className='Cat-Header'>
                <h2 className='Cat-Heading'>{heading}</h2>
              </div>
              <section className='Cat-bookList'>
                <div className='Mls-wrap'>
                  {books.map(book => {
                    <BookItem_h
                      book={book}
                    />
                  })}
                </div>
              </section>
            </section>
          </div>
          <div className='SMainSidebar'>
            <section className='SideBar-area'>
              <div className='Side-Header'>
                <div className='Side-Heading'>Genres</div>
              </div>
              <div className='Side-genres'>
                <div className='Genres-wrapper'>
                  {genres.map(genre => (
                    <Link key={genre.genreID}>
                      <div className='Genres-Items'>
                        <p className='Genre-SideBar'>{genre.genre}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage