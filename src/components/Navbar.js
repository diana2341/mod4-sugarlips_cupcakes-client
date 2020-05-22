import React from 'react';
import Search from './Search'
import Sort from './Sort'

const Navbar = () => {
  return (
    <div className="simple-flex-row top">
      <Search />
      <Sort />
    </div>
  )
}

export default Navbar;
