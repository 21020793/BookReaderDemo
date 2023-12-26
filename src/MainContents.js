import React from 'react'
import BookItem_h from './BookItem_h'
import { Link } from 'react-router-dom'


function MainContents({books}) {
  return (
    <div className='HomeMWrapper'>
        <div className='HomeMContainer'>
            <div className='hw-2col'>
                <section className='HomeContent-left'>
                    <div className='Content-area'>
                        <div className='hmc-header'>
                            <div className='hmc-heading'>
                                <h2 className='Header-label'>Lastest Updated</h2>
                            </div>
                        </div>
                        <div className='hcm-content'>
                            <div className='hcm-wrap'>
                                {books.map(book => (
                                    <BookItem_h book = {book} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='HomeContent-right'>
                    <div className='Most-viewed'>
                        <div className='mv-header'>
                            <div className='mv-heading'>
                                <h2 className='Header-label'>Most Viewed</h2>
                            </div>
                        </div>
                        <div className='mv-content'>
                            <div className='mv-contentBox'>
                                <div className='mv-tabContent'>
                                    <div className='mv-featureBox'>
                                        <ul className='mv-list'>
                                            {books.map(book => (
                                                <li className='mv-itemLi' key={book.id}>
                                                    <div className='Ranking-num'><span>01</span></div>
                                                    <div className='mv-poster'><img src={book.icons} alt="" /></div>
                                                    <div className='mv-details'>
                                                        <h3 className='mv-title'><Link>{book.title}</Link></h3>
                                                        <div className='mv-info'>
                                                            <span className='fd-item'>EN/VIE</span>
                                                            <span className='dot'></span>
                                                            <span className='fd-genres'>{book.genres.slice(0,2).map(genre => (<a className='fd-genre'>{genre}</a>))}</span>
                                                        </div>
                                                        <div className='fd-chapters'>
                                                            <span className='fd-chapter'>
                                                                <a className=''>{`Chapter ${book.available_chapters.slice().sort((a, b) => b.id - a.id)[0].chapterID}`}</a> 
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default MainContents