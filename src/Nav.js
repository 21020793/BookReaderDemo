import React from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useSearchParams();
  const [searchText, setSearchText] = useState('');
  
  const onSearchChange = (e) => {
    const text = e.target.value;
    if (text.length === 0) {
      search.delete('query');
      setSearch(search, {
        replace: true,
      });
    } else {
      search.set('query', text);
      setSearch(search, {
        replace: true,
      });
    }
    setSearchText(text);
  }

  const handleSearchEvent = (e) => {
    e.preventDefault();
    navigate(`/search?${search}`, { state: { query: searchText } });
  }

  return (
    <div className="Header">
      <section className="HContainer">
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="/images/logo.png" id="logo" />
        </Link>
        <section id="Header_menu">
          <ul className="Header_menu-list">
            <li className="NavItem">
              <Link to="/book/hello">
                <p>Books</p>
              </Link>
            </li>
            <li className="NavItem">
              <Link to="/about">
                <p>About</p>
              </Link>
            </li>
            <li className="NavItem">
              <button className="TypeExpand" onClick={() => setIsOpen(!isOpen)}>
                Types
              </button>
              <FontAwesomeIcon icon={faChevronDown} className="DropdownIcon" />
              {isOpen && (
                <section className="DropdownT">
                  <section className="DropdownTypes">
                    <li>Novel</li>
                    <li>Self Help</li>
                    <li>Business</li>
                    <li>Manga</li>
                  </section>
                </section>
              )}
            </li>
          </ul>
        </section>
        <section id="Header_MenuRight">
          <div id="SearchBar">
            <div className="SearchContent">
              <form onSubmit={handleSearchEvent}>
                <input
                  type="text"
                  name="keyword"
                  className="form-control search-input"
                  placeholder="Search book..."
                  onChange={onSearchChange}
                ></input>
                <button type="submit" className="search-icon">
                  <FontAwesomeIcon
                    className="SearchIconNav"
                    icon={faMagnifyingGlass}
                  />
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Nav