import React from 'react'
import CartNavbar from './CartNavbar'

const ConfirmPurchase = props => {
  let confetti=require("../cupcake-img/giphy.gif")

  return (
    <div>
      <CartNavbar
        loggedInUser={props.loggedInUser} 
        logoutUser={props.logoutUser}
      />
      <br /><br /><br /><br /><br />
      <h2>Thank you for your purchase!</h2>
      <img className="confetti" src={confetti} alt="confetti"/>
      <img className="confetti-1" src={confetti} alt="confetti"/>

      
    </div>
  )
}

export default ConfirmPurchase
