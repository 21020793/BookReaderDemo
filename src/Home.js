import React from 'react'
import Feed from './Feed'
import HeroBanner from './HeroBanner'
import MainContents from './MainContents'
import './MainContent.css'
const Home = ({ API_URL }) => {

  return (
    <main className='Home'>
      <main>
        <section className='HBItems'>
          <HeroBanner
            API_URL={API_URL}
          />
        </section>
        <section className='FeedItems'>
          <Feed
            API_URL={API_URL}
          />
        </section>
        <section className='MainItems'>
          <MainContents
            API_URL={API_URL}
          />
        </section>
      </main>
    </main>
  )
}

export default Home