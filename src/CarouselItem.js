import React from 'react'
import { useRef, useState, useEffect } from 'react'



const CarouselItem = ({ book }) => {

    const ref = useRef(null);
    const [ShowReadMore, setShowReadMore] = useState(false);

    useEffect(() => {
        if(ref.current){
            console.log(ref.current.scrollHeight, ref.current.clientHeight);
            setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
        }
    }, [])

    const ReadMoreCSS = {
        WebkitLineClamp: 8,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box'
    }

    return (
        <article key={book.id}>
            <section className='HBwrapper'>
                <section className='HBcontainer'>
                    <section className='HB-OuterLayer'>
                        <section className='HB-2cols'>
                            <section className='HB-LeftDis'>
                                <div className='HBCover'>
                                    <div className='HBPoster'>
                                        <img src={book.icons} alt="" />
                                    </div>
                                </div>
                            </section>
                            <section className='HB-RightDis'>
                                <article className='HBDesc'>
                                    <p className='HBTitle'>
                                        {book.title}
                                    </p>
                                    <p className='DescContent' style={ReadMoreCSS} ref={ref}>
                                        {book.body}
                                    </p>
                                </article>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </article>
    )
}

export default CarouselItem