import React from 'react'
import { Link } from 'react-router-dom'
const Book = ({ book }) => {
    return (
        <article className='bookElement' key={book.id}>
            <Link to={`/book/${book.title}`}>
                <img className='CoverH' src={book.icons} alt="" />
            </Link>
            <div className='BookInf'>
                <div className='TitleContainer'>
                    <Link to={`/book/${book.title}`}>
                        <p className='Title'><strong>{book.title}</strong></p>
                    </Link>
                </div>
                <div className='Chapters'>
                    {book.genres.slice(0, 3).map(genre => (
                        <p className='GenresItem'>{genre}</p>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default Book