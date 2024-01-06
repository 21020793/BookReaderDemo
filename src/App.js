import Header from './Header';
import Footer from './Footer';
import './index.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { AuthProvider } from './Auth';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import SearchPage from './SearchPage';
import apiRequest from './apiRequest';
import Reading from './Reading';
import Login from './Login';
import Profile from './Profile';
function App() {


  const API_URL = 'http://127.0.0.1:9800';


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
  return (
    <AuthProvider>
    <div className='App'>
      <Nav />
      <Routes>
        <Route exact path="/login_signup"
          element={<Login API_URL={API_URL}/>}>
        </Route>
        <Route exact path="/profile"
          element={<Profile/>}>
        </Route>
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
        <Route exact path="/book/:title/:chapterIDs"
          element={<Reading API_URL={API_URL}/>}>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Missing />}></Route>
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
