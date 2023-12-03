import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({search, setSearch, searchResult, setSearchResult}) => {
  return (
    <nav className='Nav'>
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search Books</label>
            <input 
                id='search'
                type="text" 
                placeholder='Search books'
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
            />
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/books'>Books</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </form>
    </nav>
  )
}

export default Nav