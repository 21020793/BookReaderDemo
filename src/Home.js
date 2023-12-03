import React from 'react'
import Feed from './Feed'
import HeroBanner from './HeroBanner'
const Home = ({ books }) => {

  return (
    <main className='Home'>
      {books.length ? (
        <main>
          <section className='HBItems'>
            <HeroBanner
              books={books}
            />
          </section>
          <section className='FeedItems'>
            <Feed
              books={books}
            />
          </section>
        </main>
      ) : (
        <p style={{ marginTop: "2rem" }}>No books to display.</p>
      )}
    </main>
  )
}

export default Home