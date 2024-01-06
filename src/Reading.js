import React from 'react';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faArrowLeft, faArrowRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import './Reading.css';
import { useEffect, useState} from 'react';
const Reading = ({ API_URL }) => {

    const { title, chapterIDs } = useParams();
    
    const [Chapters, setChapters] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [chapterList, setChapterList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const CurrentChapter = parseInt(chapterIDs, 10);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/book/${title}/${chapterIDs}`);
                const Clist = await fetch(`${API_URL}/book${title}`);
                if (!response.ok || !Clist.ok) throw new Error("Could not find the search results")
                const listItems = await response.json();
                const listChapters = await Clist.json();
                setChapters(listItems);
                setChapterList(listChapters);
                setFetchError(null);
                setLoading(false);
            }
            catch (error) {
                setFetchError(error.message);
            }
        }

        setTimeout(() => {
            fetchItems();
        }, 2000)
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            {!fetchError && !loading &&
                <div id='MainPart'>
                    <section id='rd-side_icon'>
                        <div className='Previous'><Link to={`/book/${title}/${CurrentChapter - 1}`}><FontAwesomeIcon icon={faArrowLeft} className='faLeft_arrow' /></Link></div>
                        <div className='Return_Home'><Link to={'/'}><FontAwesomeIcon icon={faHouse} className='HouseIcon' /></Link></div>
                        <div className='List_Info'><button onClick={handleClick}><FontAwesomeIcon icon={faList} className='List_Icon' /></button></div>
                        <div className='NextB'><Link to={`/book/${title}/${CurrentChapter + 1}`}><FontAwesomeIcon icon={faArrowRight} className='faRight_arrow' /></Link></div>
                    </section>
                    {isOpen && (
                        <section id='RChapter_list'>
                            <div className='Toggle_body'>
                                <header className='rd_sidebar-header'>
                                    <Link to={`/book/${title}`}><h3 className='rd_sidebar-name'></h3>{title}</Link>
                                </header>
                                <div className='Sub_list'>
                                    <ul id='Chapter_UList'>
                                        {chapterList.available_chapters.map(chapter => (
                                            <li key={chapter.chapterID} className='Chapter_Li' style={{ backgroundColor: chapter.chapterID === chapterIDs ? 'grey' : 'white' }}>
                                                <Link className='L-element' to={`/book/${title}/${chapter.chapterID}`}><p>Chapter: {chapter.chapterID}</p></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )}
                    <div className='rd-Container'>
                        <div className='rd-row'>
                            <div className='rd-readingContent'>
                                <div className='rd-chapterTitle'>
                                    <h2 className='rd-chapterName'>{Chapters.chapterTitle}</h2>
                                </div>

                                <div id='rd-chapterContent'>
                                    {Chapters.chapter_content.map((chapterContent, index) => (
                                        <p key={index} className='paragraph'>{chapterContent}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                }
        </div>
    )
}

export default Reading