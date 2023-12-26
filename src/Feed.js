import React from 'react'
import Book from './Book'
import { useState, useEffect } from 'react';
import Carousel from '@itseasy21/react-elastic-carousel'
const Feed = ({ books }) => {

    // const [books, setBooks] = useState([])


    // useEffect(() => {
    //     const fetchItems = async () => {
    //         try {
    //             const response = await fetch(`${API_URL}/feeds`);
    //             if (!response.ok) throw new Error('No expected data received')
    //             const books = await response.json();
    //             setBooks(books)
    //             setFetchError(null)
    //         } catch (error) {
    //             setFetchError(error.message);
    //         }
    //     }
    // }, [])



    return (
        <article className='HomeFeedContainer'>
            <h2 className='Recommended'>Recommended</h2>
            <section className='booksContainer'>
                <Carousel itemsToShow={4}>
                    {books.map(book => (
                        <Book
                            key={book.id}
                            book={book}
                        />
                    ))}
                </Carousel>
            </section>
        </article>
    )
}

export default Feed