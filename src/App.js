import Header from './Header';
import Footer from './Footer';
import './index.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import SearchPage from './SearchPage';
import apiRequest from './apiRequest';

function App() {


  const API_URL = '';


  const [genres, setGenres] = useState([
    {
      genreID: 1,
      genre: 'Action'
    },
    {
      genreID: 2,
      genre: 'Adventure'
    },
    {
      genreID: 3,
      genre: 'Art'
    },
    {
      genreID: 4,
      genre: 'Business'
    },
    {
      genreID: 5,
      genre: 'Fantasy'
    },
    {
      genreID: 6,
      genre: 'Fiction'
    },
    {
      genreID: 7,
      genre: 'History'
    },
    {
      genreID: 8,
      genre: 'Mystery'
    },
    {
      genreID: 9,
      genre: 'Romance'
    },
    {
      genreID: 10,
      genre: 'Science'
    },
    {
      genreID: 11,
      genre: 'Sci-Fi'
    },
    {
      genreID: 12,
      genre: 'Psychology'
    },
    {
      genreID: 13,
      genre: 'Thriller'
    }
  ]);
  const [fetchError, setFetchError] = useState(null)

  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Attack on Titans',
      chapters: 139,
      genres: [
        'Action', 'Fantasy', 'Seinen'
      ],
      available_chapters: [
        {
          chapterID: 1,
          chapter_title: 'To You, 2000 Years from now',
        },
        {
          chapterID: 2,
          chapter_title: 'That day',
        },
        {
          chapterID: 3,
          chapter_title: 'Night of the Disbanding Ceremony',
        },
        {
          chapterID: 4,
          chapter_title: 'First Battle',
        },
        {
          chapterID: 5,
          chapter_title: 'A Dull Glow in a Midst of Despair',
        },
        {
          chapterID: 6,
          chapter_title: 'The World that the Girl saw',
        },
        {
          chapterID: 7,
          chapter_title: 'Small Blade',
        },
        {
          chapterID: 8,
          chapter_title: 'Roar',
        },
        {
          chapterID: 9,
          chapter_title: 'The Beating of the Heart can be heard',
        },
        {
          chapterID: 10,
          chapter_title: `Where's the left arm?`,
        },
        {
          chapterID: 11,
          chapter_title: `Response`,
        },
        {
          chapterID: 12,
          chapter_title: `Icon`,
        },
        {
          chapterID: 13,
          chapter_title: `Wound`,
        },
      ],
      status: 'finished',
      published: 'September 2009',
      author: 'Hajime Isayama',
      icons: '/images/img3.jpg',
      body: `Hundreds of years ago, horrifying creatures which resembled humans appeared. These mindless, towering giants, called "titans," proved to be an existential threat, as they preyed on whatever humans they could find in order to satisfy a seemingly unending appetite. Unable to effectively combat the titans, mankind was forced to barricade themselves within large walls surrounding what may very well be humanity's last safe haven in the world. In the present day, life within the walls has finally found peace, since the residents have not dealt with titans for many years. Eren Yeager, Mikasa Ackerman, and Armin Arlert are three young children who dream of experiencing all that the world has to offer, having grown up hearing stories of the wonders beyond the walls. But when the state of tranquility is suddenly shattered by the attack of a massive 60-meter titan, they quickly learn just how cruel the world can be. On that day, Eren makes a promise to himself that he will do whatever it takes to eradicate every single titan off the face of the Earth, with the hope that one day, humanity will once again be able to live outside the walls without fear.`

    },
    {
      id: 2,
      title: 'wlof',
      chapters: 1,
      genres: [
        'Artwork', 'AI'
      ],
      available_chapters: [
        {
          chapterID: 1,
          chapter_title: 'To You, 2000 Years from now',
        },
        {
          chapterID: 2,
          chapter_title: 'That day',
        },
        {
          chapterID: 3,
          chapter_title: 'Night of the Disbanding Ceremony',
        },
        {
          chapterID: 4,
          chapter_title: 'First Battle',
        },
        {
          chapterID: 5,
          chapter_title: 'A Dull Glow in a Midst of Despair',
        },
        {
          chapterID: 6,
          chapter_title: 'The World that the Girl saw',
        },
        {
          chapterID: 7,
          chapter_title: 'Small Blade',
        },
        {
          chapterID: 8,
          chapter_title: 'Roar',
        },
        {
          chapterID: 9,
          chapter_title: 'The Beating of the Heart can be heard',
        },
        {
          chapterID: 10,
          chapter_title: `Where's the left arm?`,
        },
        {
          chapterID: 11,
          chapter_title: `Response`,
        },
        {
          chapterID: 12,
          chapter_title: `Icon`,
        },
        {
          chapterID: 13,
          chapter_title: `Wound`,
        },
      ],
      status: 'finished',
      published: 'September 2022',
      author: 'Midjourney',
      icons: '/images/wlof.jpg',
      body: 'Just a artwork of an artist found online'
    },
    {
      id: 3,
      title: 'chenlok',
      chapters: 1,
      genres: [
        'Artwork', 'AI', 'seinen'
      ],
      available_chapters: [
        {
          chapterID: 1,
          chapter_title: 'To You, 2000 Years from now',
        },
        {
          chapterID: 2,
          chapter_title: 'That day',
        },
        {
          chapterID: 3,
          chapter_title: 'Night of the Disbanding Ceremony',
        },
        {
          chapterID: 4,
          chapter_title: 'First Battle',
        },
        {
          chapterID: 5,
          chapter_title: 'A Dull Glow in a Midst of Despair',
        },
        {
          chapterID: 6,
          chapter_title: 'The World that the Girl saw',
        },
        {
          chapterID: 7,
          chapter_title: 'Small Blade',
        },
        {
          chapterID: 8,
          chapter_title: 'Roar',
        },
        {
          chapterID: 9,
          chapter_title: 'The Beating of the Heart can be heard',
        },
        {
          chapterID: 10,
          chapter_title: `Where's the left arm?`,
        },
        {
          chapterID: 11,
          chapter_title: `Response`,
        },
        {
          chapterID: 12,
          chapter_title: `Icon`,
        },
        {
          chapterID: 13,
          chapter_title: `Wound`,
        },
      ],
      status: 'publishing',
      published: 'September 2022',
      author: 'Midjourney',
      icons: '/images/chenlok.png',
      body: 'AI image created by Midjourney'
    },
    {
      id: 4,
      title: 'One hundred years of solitude',
      chapters: 20,
      genres: [
        'Fiction', 'Novels', 'Literature', 'Magical Realism'
      ],
      available_chapters: [
        {
          chapterID: 1,
          chapter_title: 'To You, 2000 Years from now',
        },
        {
          chapterID: 2,
          chapter_title: 'That day',
        },
        {
          chapterID: 3,
          chapter_title: 'Night of the Disbanding Ceremony',
        },
        {
          chapterID: 4,
          chapter_title: 'First Battle',
        },
        {
          chapterID: 5,
          chapter_title: 'A Dull Glow in a Midst of Despair',
        },
        {
          chapterID: 6,
          chapter_title: 'The World that the Girl saw',
        },
        {
          chapterID: 7,
          chapter_title: 'Small Blade',
        },
        {
          chapterID: 8,
          chapter_title: 'Roar',
        },
        {
          chapterID: 9,
          chapter_title: 'The Beating of the Heart can be heard',
        },
        {
          chapterID: 10,
          chapter_title: `Where's the left arm?`,
        },
        {
          chapterID: 11,
          chapter_title: `Response`,
        },
        {
          chapterID: 12,
          chapter_title: `Icon`,
        },
        {
          chapterID: 13,
          chapter_title: `Wound`,
        },
      ],
      status: 'publishing',
      published: 'September 2022',
      author: 'Midjourney',
      icons: '/images/image8.jpg',
      body: 'One of the twentieth century’s enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world and the ultimate achievement in a Nobel Prize–winning career. The novel tells the story of the rise and fall of the mythical town of Macondo through the history of the Buendía family. Rich and brilliant, it is a chronicle of life, death, and the tragicomedy of humankind. In the beautiful, ridiculous, and tawdry story of the Buendía family, one sees all of humanity, just as in the history, myths, growth, and decay of Macondo, one sees all of Latin America. Love and lust, war and revolution, riches and poverty, youth and senility, the variety of life, the endlessness of death, the search for peace and truth—these universal themes dominate the novel. Alternately reverential and comical, One Hundred Years of Solitude weaves the political, personal, and spiritual to bring a new consciousness to storytelling. Translated into dozens of languages, this stunning work is no less than an account of the history of the human race.'
    },
    {
      id: 5,
      title: 'Attack on Titans',
      chapters: 139,
      genres: [
        'Action', 'Fantasy', 'Seinen'
      ],
      available_chapters: [
        {
          chapterID: 1,
          chapter_title: 'To You, 2000 Years from now',
        },
        {
          chapterID: 2,
          chapter_title: 'That day',
        },
        {
          chapterID: 3,
          chapter_title: 'Night of the Disbanding Ceremony',
        },
        {
          chapterID: 4,
          chapter_title: 'First Battle',
        },
        {
          chapterID: 5,
          chapter_title: 'A Dull Glow in a Midst of Despair',
        },
        {
          chapterID: 6,
          chapter_title: 'The World that the Girl saw',
        },
        {
          chapterID: 7,
          chapter_title: 'Small Blade',
        },
        {
          chapterID: 8,
          chapter_title: 'Roar',
        },
        {
          chapterID: 9,
          chapter_title: 'The Beating of the Heart can be heard',
        },
        {
          chapterID: 10,
          chapter_title: `Where's the left arm?`,
        },
        {
          chapterID: 11,
          chapter_title: `Response`,
        },
        {
          chapterID: 12,
          chapter_title: `Icon`,
        },
        {
          chapterID: 13,
          chapter_title: `Wound`,
        },
      ],
      status: 'finished',
      published: 'September 2009',
      author: 'Hajime Isayama',
      icons: '/images/img3.jpg',
      body: `Hundreds of years ago, horrifying creatures which resembled humans appeared. These mindless, towering giants, called "titans," proved to be an existential threat, as they preyed on whatever humans they could find in order to satisfy a seemingly unending appetite. Unable to effectively combat the titans, mankind was forced to barricade themselves within large walls surrounding what may very well be humanity's last safe haven in the world. In the present day, life within the walls has finally found peace, since the residents have not dealt with titans for many years. Eren Yeager, Mikasa Ackerman, and Armin Arlert are three young children who dream of experiencing all that the world has to offer, having grown up hearing stories of the wonders beyond the walls. But when the state of tranquility is suddenly shattered by the attack of a massive 60-meter titan, they quickly learn just how cruel the world can be. On that day, Eren makes a promise to himself that he will do whatever it takes to eradicate every single titan off the face of the Earth, with the hope that one day, humanity will once again be able to live outside the walls without fear.`

    },
    {
      id: 6,
      title: 'Attack on Titans',
      chapters: 139,
      genres: [
        'Action', 'Fantasy', 'Seinen'
      ],
      available_chapters: [
        {
          chapterID: 1,
          chapter_title: 'To You, 2000 Years from now',
        },
        {
          chapterID: 2,
          chapter_title: 'That day',
        },
        {
          chapterID: 3,
          chapter_title: 'Night of the Disbanding Ceremony',
        },
        {
          chapterID: 4,
          chapter_title: 'First Battle',
        },
        {
          chapterID: 5,
          chapter_title: 'A Dull Glow in a Midst of Despair',
        },
      ],
      status: 'finished',
      published: 'September 2009',
      author: 'Hajime Isayama',
      icons: '/images/img3.jpg',
      body: `Hundreds of years ago, horrifying creatures which resembled humans appeared. These mindless, towering giants, called "titans," proved to be an existential threat, as they preyed on whatever humans they could find in order to satisfy a seemingly unending appetite. Unable to effectively combat the titans, mankind was forced to barricade themselves within large walls surrounding what may very well be humanity's last safe haven in the world. In the present day, life within the walls has finally found peace, since the residents have not dealt with titans for many years. Eren Yeager, Mikasa Ackerman, and Armin Arlert are three young children who dream of experiencing all that the world has to offer, having grown up hearing stories of the wonders beyond the walls. But when the state of tranquility is suddenly shattered by the attack of a massive 60-meter titan, they quickly learn just how cruel the world can be. On that day, Eren makes a promise to himself that he will do whatever it takes to eradicate every single titan off the face of the Earth, with the hope that one day, humanity will once again be able to live outside the walls without fear.`

    }
  ])

  // useEffect( () => {
  //   const fetchItems = async () => {
  //     try{
  //       const response = await fetch(API_URL);{/*need to specify the path to get the items */}
  //       if (!response.ok) throw new Error('No expected data received')
  //       const books = await response.json();
  //       setBooks(books)
  //       setFetchError(null)
  //     } catch(error){
  //       setFetchError(error.message);
  //     }
  //   }
  // })

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route exact path="/"
          element={<Home API_URL={API_URL} />}>
        </Route>
        <Route exact path="/book"
          element={<NewPost />}>
        </Route>
        <Route exact path="/search"
          element={<SearchPage API_URL={API_URL} genres={genres} />}>
        </Route>
        <Route exact path="/book/:title"
          element={<PostPage API_URL={API_URL} genres={genres} />}>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Missing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
