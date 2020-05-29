import React from 'react'
import CartNavbar from './CartNavbar'

const ConfirmPurchase = props => {
  let confetti=require("../cupcake-img/giphy.gif")
  let shopping=require("../cupcake-img/shopping.png")
  let bubble=require("../cupcake-img/bubble.png")



  return (
    <div>
      <CartNavbar
        loggedInUser={props.loggedInUser} 
        logoutUser={props.logoutUser}
      />
      <br /><br /><br /><br /><br />
      <h2 className="confirm-titile">Thank you for your purchase!</h2>
      <img className="confetti" src={confetti} alt="confetti"/>
      <img className="confetti-1" src={confetti} alt="confetti"/>
      <img className="confetti-3" src={confetti} alt="confetti"/>

      <div className="characters">
      <img className="oven" src={shopping} alt="oven"/>
      <img className="checkout-bubble" src={bubble} alt="bubble"/>
      
      <p className="order-confirm">your order is now being made! check your Email for proccessing details </p>
      </div>


      
    </div>
  )
}

export default ConfirmPurchase
