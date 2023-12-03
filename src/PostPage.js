import React from 'react'
import { useParams, Link } from "react-router-dom"
import AniDetails from './AniDetails'
import Chapters from './Chapters'
import './Postpage.css'
const PostPage = ({ books, genres}) => {
// we can dev another handleAddBook when clients add new book to their reading tracklist (and for reading history purposes)
  const { id } = useParams();
  const book = books.find(book => book.id.toString() === id);

  return (
    <main className='BookPage'>
      <article className='Book'>
        {book &&
          <div className='wrapper'>
            <AniDetails
              book={book}
            />
            <Chapters
              book={book}
              genres={genres}
            />
          </div>
        }
      </article>
    </main>
  )
}

export default PostPage