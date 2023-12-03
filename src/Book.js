import React from 'react'
import { Link } from 'react-router-dom'
const Book = ({ book }) => {
    return (
        <article className='bookElement' key={book.id}>
            <Link to={`/book/${book.id}`}>
                <img className='CoverH' src={book.icons} alt="" />
            </Link>
            <Link to={`/book/${book.id}`}>
                <p className='Title'>{book.title}</p>
                <p className='Chapters'>Chapters {book.chapters}</p>
            </Link>
            <p className='Summary'>{
                (book.body).length < 25
                    ? book.body
                    : `${book.body.slice(0, 25)}...`
            }</p>
        </article>
    )
}

export default Book