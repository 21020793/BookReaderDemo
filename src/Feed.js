import React from 'react'
import Book from './Book'
import { useState } from 'react';
const Feed = ({ books }) => {
    
    return (
        <article className='HomeFeedContainer'>
            <h2 className='newlyReleased'>Newly Released</h2>
            <section className='booksContainer'>
                {books.map(book => (
                    <Book
                        key={book.id}
                        book={book}
                    />
                ))}
            </section>
        </article>
    )
}

export default Feed