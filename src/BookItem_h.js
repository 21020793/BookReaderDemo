import React from 'react'
import { Link } from 'react-router-dom'
import './SearchPage.css';


const BookItem_h = ({ book }) => {
  return (
    <section className='Cat-item' key={book.id}>
      <div className='Cat-poster'>
        <Link to={`/book/${book.title}`}>
          <img className='Poster-des' src={book.icons} alt="" />
        </Link>
      </div>
      <div className='CatItem-details'>
        <h3 className='CatItem-name'>{book.title}</h3>
        <div className='Genre-info'>
          <div className='Genre-CList'>
            {book.genres.slice(0,3).map(genre => (
             <a className='GenreCs'>{genre}</a>
            ))}
          </div>
        </div>
        <div className='CatItem-Chapters'>
          {book.available_chapters.sort((a, b) => b.chapterID - a.chapterID).slice(0, 3).map(chapter => (
            <div className='Chapter_CItem'>
              <div className='Chapter-prop'>
                  <Link to={`/book/${book.title}/${chapter.chapterID}`}><a className='chapterN'>{`Chapter ${chapter.chapterID}`}</a></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookItem_h