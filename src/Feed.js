import React from 'react'
import Book from './Book'
import { useState, useEffect } from 'react';
import Carousel from '@itseasy21/react-elastic-carousel'
const Feed = ({ API_URL }) => {

    const [books, setBooks] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/home/feeds`);
                if (!response.ok) throw new Error('No expected data received');
                const books = await response.json();
                setBooks(books);
                setFetchError(null);
            } catch (error) {
                setFetchError(error.message);
            }
        }

        fetchItems();
    }, [])



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