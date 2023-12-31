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

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}/book/${title}/${chapterIDs}`);
                console.log(response);
                const Clist = await fetch(`${API_URL}/book${title}`);
                console.log(Clist);
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


    const [chapterNumber, setChapterNumber] = useState([
        {
            chapterTitle: 'A monster calls',
            chapterID: 1,
            chapter_content: [
                'The monster showed up just after midnight. As they do.',
                'Conor was awake when it came. ',
                `   He’d had a nightmare. Well, not a nightmare. The nightmare. The one he’d been having a 
                lot lately. The one with the darkness and the wind and the screaming. The one with the hands 
                slipping from his grasp, no matter how hard he tried to hold on. The one that always ended with– 
                “Go away,” Conor whispered into the darkness of his bedroom, trying to push the nightmare 
                back, not let it follow him into the world of waking. “Go away now.” `,
                `  He glanced over at the clock his mum had put on his bedside table. 12.07.Seven minutes 
                past midnight.Which was late for a school night, late for a Sunday, certainly.`,
                `   He’d told no one about the nightmare.Not his mum, obviously, but no one else either, not 
                his dad in their fortnightly(or so) phone call, definitely not his grandma, and no one at school. 
                Absolutely not. `,
                `   What happened in the nightmare was something no one else ever needed to know. `,
                `   Conor blinked groggily at his room, then he frowned.There was something he was 
                missing.He sat up in his bed, waking a bit more.The nightmare was slipping from him, but there 
                was something he couldn’t put his finger on, something different, something– He listened,
                straining against the silence, but all he could hear was the quiet house around him, the occasional 
                tick from the empty downstairs or a rustle of bedding from his mum’s room next door.`,
                `   Nothing. `,
                `   And then something.Something he realized was the thing that had woken him. 
                Someone was calling his name.
                    Conor. `,
                `   He felt a rush of panic, his guts twisting.Had it followed him? Had it somehow stepped 
                out of the nightmare and–? 
                “Don’t be stupid,” he told himself. “You’re too old for monsters.” `,
                `   And he was.He’d turned thirteen just last month.Monsters were for babies.Monsters 
                were for bed - wetters.Monsters were for– Conor. `,
                `   There it was again.Conor swallowed.It had been an unusually warm October, and his 
                window was still open.Maybe the curtains shushing each other in the small breeze could have 
                sounded like– Conor. 
                    All right, it wasn’t the wind.It was definitely a voice, but not one he recognized.It
                wasn’t his mother’s, that was for sure.It wasn’t a woman’s voice at all, and he wondered for a 
                crazy moment if his dad had somehow made a surprise trip from America and arrived too late to 
                phone and– Conor.`,
                `   No.Not his dad.This voice had a quality to it, a monstrous quality, wild and untamed. 
                    Then he heard a heavy creak of wood outside, as if something gigantic was stepping 
                across a timber floor. 
                    He didn’t want to go and look.But at the same time, a part of him wanted to look more 
                than anything. 
                    Wide awake now, he pushed back the covers, got out of bed, and went over to the
                window.In the pale half - light of the moon, he could clearly see the church tower up on the small 
                hill behind his house, the one with the train tracks curving beside it, two hard steel lines glowing`
            ]
        }
    ])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    // return (
    //     <div className='ReadingWrapper'>
    //         <div className='ReadingHeader'>
    //             <div className='ReadingContainer'>
    //                 <div className='ReadingInfo'>
    //                     <div className='ReadingLogo'>
    //                         <Link to='/'><img src="/images/logo.png" id='logo' /></Link>
    //                     </div>
    //                     <div className='Hr-line'></div>
    //                     <div className='RTitle'><Link><h2 className='Hr-title'>adfadf</h2></Link></div>
    //                     <div className='Hr-navigation'>
    //                         <div className='ReadingOptions'>
    //                             <div className='ReadingChapter rt-item'>
    //                                 <button type='button' className='ChapterButton' onClick={handleToggleOpen}>
    //                                     <span className='CurrentChap'>39</span>
    //                                     <FontAwesomeIcon icon={faAngleDown} />
    //                                 </button>
    //                                 {isOpen && (
    //                                     <div className='DropDown_Menu DropDown_Chapters'>
    //                                         <div className='RChapterList_hidden'>
    //                                             <div className='RChapterList_search'>
    //                                                 <div className='RChapterList_s'>
    //                                                     <form className='Reading_SearchForm' onSubmit={e => e.preventDefault()}>
    //                                                         <div className='RSearch_icon'>
    //                                                             <FontAwesomeIcon className='RSearch' icon={faMagnifyingGlass} />
    //                                                         </div>
    //                                                         <input
    //                                                             className='RInput_Form'
    //                                                             type="text"
    //                                                             placeholder='Number of Chapter'
    //                                                             value={search}
    //                                                             onChange={(e) => setSearch(e.target.value)} />
    //                                                     </form>
    //                                                 </div>
    //                                             </div>
    //                                             <div className='RChapterList_UL'>
    //                                                 <ul className='UlReadingList'>
    //                                                     {/* {book.available_chapters
    //                                                         .filter(chapterSearch => chapterSearch.chapterID === search)
    //                                                         .map(chapter => (
    //                                                             <li className='RChapterItem' key={chapter.chapterID}>
    //                                                                 <Link>
    //                                                                     <div className='Item_link'>
    //                                                                         <span className='Item_name'>
    //                                                                             Chapter: {chapter.chapterID}
    //                                                                         </span>
    //                                                                     </div>
    //                                                                 </Link>
    //                                                             </li>
    //                                                         ))
    //                                                     } */}
    //                                                 </ul>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 )}
    //                             </div>
    //                         </div>
    //                         <div className='R_leftNav'>
    //                             <button className='L_next'><Link><FontAwesomeIcon icon={faArrowLeft} /></Link></button>
    //                         </div>
    //                         <div className='R_rightNav'>
    //                             <button className='L_next'><Link><FontAwesomeIcon icon={faArrowRight} /></Link></button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='Text_content'>
    //             <div className='Text_wrapper'>
    //                 <div className='Text_container'>
    //                     <div id='vertical_content'>
    //                         <div className='RChapter_Content'>
    //                             {chapterNumber
    //                                 .filter((chapter) => chapter.chapterID === chapterIDs)
    //                                 .map((filteredChapter, outerIndex) =>
    //                                     filteredChapter.chapter_content.map((paragraph, innerIndex) => (
    //                                         <p key={`${outerIndex}-${innerIndex}`} className='Paragraphs'>
    //                                             {paragraph}
    //                                         </p>
    //                                     ))
    //                                 )}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <div>
            {!fetchError && !loading &&
                <div id='MainPart'>
                    <section id='rd-side_icon'>
                        <div className='Previous'><Link to={`/book/${title}/${chapterIDs - 1}`}><FontAwesomeIcon icon={faArrowLeft} className='faLeft_arrow' /></Link></div>
                        <div className='Return_Home'><Link to={'/'}><FontAwesomeIcon icon={faHouse} className='HouseIcon' /></Link></div>
                        <div className='List_Info'><button onClick={handleClick}><FontAwesomeIcon icon={faList} className='List_Icon' /></button></div>
                        <div className='NextB'><Link to={`/book/${title}/${chapterIDs + 1}`}><FontAwesomeIcon icon={faArrowRight} className='faRight_arrow' /></Link></div>
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