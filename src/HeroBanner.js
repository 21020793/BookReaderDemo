import React from 'react'
import Carousel from '@itseasy21/react-elastic-carousel'
import CarouselItem from './CarouselItem'
import './HeroBanner.css';
import { Link } from 'react-router-dom';
const HeroBanner = ({ books }) => {
    return (
        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={5000}>
            {books.map(book => (
                <Link to={`/book/${book.id}`}>
                    <CarouselItem
                        book={book}
                    />
                </Link>
            ))}
        </Carousel>
    )
}

export default HeroBanner