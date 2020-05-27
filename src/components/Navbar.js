  
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = props => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <a href='/cupcakes'><Link to="/cupcakes">Sugar Lipss</Link> </a>
        </div>
        { props.search ? 
          React.cloneElement(props.search, { searchName: props.searchName, handleSearchName: props.handleSearchName }) 
          : null }
        { props.sort ? 
          React.cloneElement(props.sort, { sortBy: props.sortBy, handleSortBy: props.handleSortBy}) 
          : null }
        
        <nav>
          <ul>
            { props.loggedInUser.username ? null : 
              <>
                <li >
                  <Link 
                    className="text-c" 
                    to="/login">Log in</Link>
                </li>
                <li >
                  <Link 
                    className="text-c" 
                    to="/signup">Sign up</Link>
                </li>
              </>
            }
            { props.loggedInUser.username ? 
              <>
                <li >
                    { props.accountLink ? props.accountLink : null }
                </li>
                <li>
                  <Link 
                    className="text-c"
                    to="/cart"
                  >Cart</Link>
                </li>
                <li >
                  <Link 
                    onClick={props.logoutUser} 
                    className="text-c" 
                    to="/">Logout</Link>
                </li>
              </>
             : null }
            {/* <li><Link to="/">?</Link></li> */}
            {/* <li><Link to="/">?</Link></li> */}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;

