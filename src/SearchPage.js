import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BookItem_h from './BookItem_h';
import './SearchPage.css';

const SearchPage = ({ API_URL, genres }) => {

  const location = useLocation();
  const heading = location.state.query;
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/search?query=${heading}`)
        if (!response.ok) throw new Error("Could not find the search results")
        const listItems = await response.json();
        setBooks(listItems);
        setFetchError(null);
        setLoading(false);
      }
      catch (error) {
        setFetchError(error.message);
      }
    }

    setTimeout(() => {
      fetchItems();
    }, 2000)
  }, []);


  const handleGenre = (genre) =>{
    navigate(`/search?query=${genre}`, { state: { query: genre } });
  }

  return (
    <div className='SearchWrapper'>
      {!fetchError && !loading &&
        <div className='SContainer'>
          <div className='mw-2col'>
            <div className='SMainContent'>
              <section className='Category-area'>
                <div className='Cat-Header'>
                  <h2 className='Cat-Heading'>{heading}</h2>
                </div>
                <section className='Cat-bookList'>
                  <div className='Mls-wrap'>
                    {books.map(book => (
                      <BookItem_h
                        book={book}
                      />
                    ))}
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
                      <button onClick={handleGenre(genre.genre)} key={genre.genreID}>
                        <div className='Genres-Items'>
                          <p className='Genre-SideBar'>{genre.genre}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default SearchPage