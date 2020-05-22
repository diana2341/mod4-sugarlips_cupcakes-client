import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="container">
    <header>
      <div className="logo">
        <a ><Link to="/cupcakes">Sugar Lipss</Link> </a>
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Main page</Link></li>
          <li><Link to="/sign-up">Sign up</Link></li>
          <li><Link to="/profile">Account</Link></li>
          {/* <li><Link to="/">?</Link></li> */}
          {/* <li><Link to="/">?</Link></li> */}
        </ul>
      </nav>
    </header>
    </div>
    )
}

export default Navbar;