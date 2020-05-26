import React from 'react';
import { Link } from 'react-router-dom';


const CartNavbar = props => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <a href='/cupcakes'><Link to="/cupcakes">Sugar Lipss</Link> </a>
        </div>
        <nav>
          <ul>
            <>
              <li >
                <Link
                  className="text-c"
                  to="/profile"
                >Account</Link>
              </li>
              <li>
                <Link
                  className="text-c"
                  to="/cupcakes"
                >Continue Shopping</Link>
              </li>
              <li >
                <Link 
                  onClick={props.logoutUser} 
                  className="text-c" 
                  to="/">Logout</Link>
              </li>
            </>
            {/* <li><Link to="/">?</Link></li> */}
            {/* <li><Link to="/">?</Link></li> */}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default CartNavbar;

