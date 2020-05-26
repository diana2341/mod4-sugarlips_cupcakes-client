import React from 'react'
import CartNavbar from './CartNavbar'

const ConfirmPurchase = props => {

  return (
    <div>
      <CartNavbar
        loggedInUser={props.loggedInUser} 
        logoutUser={props.logoutUser}
      />
      <br /><br /><br /><br /><br />
      <h2>Thank you for your purchase!</h2>
    </div>
  )
}

export default ConfirmPurchase
