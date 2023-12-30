import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Chapters = ({ book, genres }) => {
  
  const [search, setSearch] = useState('');

  return (
    <article className='ChapterWrapper'>
      <section className='ChapterContainer'>
        <section className='mw-2col'>
          <section className='MainContent'>
            <section className='ChaptersListContainer'>
              <section className='HeaderArea'>
                <p className='ListC'><strong>List Chapter</strong></p>
              </section>
              <section className='TabContent'>
                <section className='ListChapter'>
                  <section className='ChapterSection'>
                    <section className='ChapterSearch'>
                      <form className='SearchForm' onSubmit={e => e.preventDefault()}>
                        <div
                          id="searchButton"
                        ><FontAwesomeIcon className='SearchIcon' icon={faMagnifyingGlass} /></div>
                        <input
                          id="search"
                          type="text"
                          placeholder='Chapter Number'
                          role="searchbox"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)} />
                      </form>
                    </section>
                  </section>
                  <section className='ChapterListUL'>
                    <ul className='ChaptersUL'>
                      {book.available_chapters
                        .filter(chapterSearch => chapterSearch.chapter_title.toLowerCase().includes(search))
                        .map(chapter => (
                          <li className='ChapterItem' key={chapter.chapterID}>
                            <Link to={`book/${book.title}/${chapter.chapterID}`}>
                              <p className='ChapterTitle'>Chapter {chapter.chapterID}: {chapter.chapter_title}</p>
                            </Link> {/*Link to reading Site*/}
                          </li>
                        ))}
                    </ul>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <article className='SideBar'>
            <section className='BlockSideBar'>
              <section className='SideBarHeader'>
                <p className='SideBarName'><strong>Genres</strong></p>
              </section>
              <section className='SideBarContent'>
                {/*Link to a specific genre*/}
                {genres.map(genre => (
                  <Link key={genre.genreID}>
                    <p className='GenreSideBar'>{genre.genre}</p>
                  </Link>
                ))}
              </section>
            </section>
          </article>
        </section>
      </section>
    </article>
  )
}

export default Chapters