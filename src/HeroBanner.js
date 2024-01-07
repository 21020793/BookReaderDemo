import React, { useState, useEffect } from 'react'
import Carousel from '@itseasy21/react-elastic-carousel'
import CarouselItem from './CarouselItem'
import './HeroBanner.css';
import { Link } from 'react-router-dom';

const HeroBanner = ({ API_URL }) => {

    const [books, setBooks] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    useEffect(() => {

        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/hero_banner`);
                if (!response.ok) throw new Error('No expected data received');
                const book = await response.json();
                setBooks(book);
                setFetchError(null);
            } catch (error) {
                setFetchError(error.message);
            }
        }

        setTimeout(() => {
            fetchItems();
        }, 100)
    }, [])

    return (
        <Carousel itemsToShow={1}>
            {books.map(book => (
                <Link to={`/book/${book.title}`} key={book.id}>
                    <CarouselItem
                        book={book}
                    />
                </Link>
            ))}
        </Carousel>
    )
}

export default HeroBanner