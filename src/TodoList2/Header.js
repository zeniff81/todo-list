import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <nav className='header__nav'>
        <div className='header__logo'>
          <span className='header__logoLineOne'>TODO</span>
          <span className='header__logoLineTwo'>LIST</span>
        </div>

        <div className='header__search'>
          <input type='text' className='header__searchInput' />
          <button className='header__searchButton'>Search</button>
        </div>

        <div className='header__options'>
          <div className='header__optionsLink'>
            <span className='header__optionLinkLineOne'>Hello, George</span>
            <span className='header__optionLinkLineTwo'>Sign out</span>
          </div>

          <div className='header__optionsLink'>
            <span className='header__optionLinkLineOne'>New</span>
            <span className='header__optionLinkLineTwo'>List</span>
          </div>

          <div className='header__optionsLink'>
            <span className='header__optionLinkLineOne'>Show all</span>
            <span className='header__optionLinkLineTwo'>Lists</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
