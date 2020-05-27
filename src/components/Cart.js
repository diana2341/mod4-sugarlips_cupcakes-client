import React, { Component } from 'react'
import CartNavbar from './CartNavbar'

export default class Cart extends Component {
  
  render(){
    let bow=require("../cupcake-img/bow.png")

    const {cupcakesInCart} = this.props
    const {username, first_name, last_name, address_1, address_2, city, state, zip_code, phone_number, credit_card} = this.props.loggedInUser

    if (cupcakesInCart.length > 0 && username) {
    // array of prices of each cupcake to sum into a total value
    const cupcakesPrices = cupcakesInCart.map(cupcake => cupcake.price)

    // helper method that adds up price of each cupcake
    const sumPrice = (accumulator, currentValue) => accumulator + currentValue

    // method to add up total price of all cupcakes in cart
    const cupcakeTotal = () => {
      return cupcakesPrices.reduce(sumPrice)
    }
  
    // object to track the qty of each cupcake in cart
    let cupcakeQTY = {}

    // method to track how many of each cupcake are in the cart
    const recordQTY = cupcake => {
      Object.keys(cupcakeQTY).includes(cupcake.name) ? cupcakeQTY[cupcake.name] += 1 : cupcakeQTY[cupcake.name] = 1
    }

    // method to return an array of only unique cupcakes by name to represent in html table
    const removeDuplicates = (myArr, prop) => {
      return myArr.filter((obj, pos, arr) => {
          return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
      })
    }

    // variable assigned to return value from method that removes duplicate cupcakes from cart (only want to represent unique cupcake in html table)
    let removedCupcakesDuplicates = removeDuplicates(cupcakesInCart, 'name')

    // method call to populate cupcakeQTY object that tracks how many cupcakes are in the cart
    cupcakesInCart.forEach(recordQTY)
  
    // method to render cupcake row with information including price and QTY amount in cart
    const renderCupcakeRows = () => {
      return (
        removedCupcakesDuplicates.map(cupcake => {
          return (
            <div>

          <img className="bow" src={bow} alt="bow"/>

              <h1 className="my-info">My information ❤︎ </h1>
                    <div className="cupcake-container-checkout">

            <div className="bg-img-checkout">
            
                 <img className="ck-cart" src={cupcake.image} alt="img"/>

               </div>
               </div>
            <div>
           </div>
             <div className="checkout-info">
                <p ><strong>My name is: </strong>{cupcake.name}</p>
                <p ><strong>My flavor is: </strong>{cupcake.flavor}</p>
                <p ><strong>I cost: </strong>${cupcake.price}</p>
                <p ><strong>You bought </strong>{cupcakeQTY[cupcake.name]}<strong> of me !</strong></p>
                <p ><button onClick={() => this.props.removeCupcakeFromCart(this.props.loggedInUser.id, cupcake.id)}>Remove Cupcake</button></p>
              
             </div>
             </div>
              


          )
        })
      )
    }
  

    return(
      
      <div>
        <CartNavbar 
          loggedInUser={this.props.loggedInUser} 
          logoutUser={this.props.logoutUser}
        />
        <br /><br /><br /><br /><br />
        <h3 className="cart-user">{username ? `${username}'s current Cart` : 'Log in to shop our cupcakes!'}</h3><br />
        {cupcakesInCart ? 
          <table>
            <thead>
              <tr>
                {/* <th>Name</th>
                <th>Flavor</th>
                <th>Price</th>
                <th>Qty</th> */}
              </tr>
            </thead>
            <tbody>
              {cupcakesInCart ? renderCupcakeRows() : null} 
            </tbody>
          </table>
          
        : null }
        <hr className="horizon-line"/>

        <h3 className="total-info">{cupcakesInCart ? `Your total is: $${cupcakeTotal()}` : null}</h3><br />
<div className="ship-info">
        <h3>Shipping Information</h3>
        <p>{first_name} {last_name}</p>
        <p>{address_1} {address_2}</p>
        <p>{city} {state}, {zip_code}</p>
        <p>Phone number: {phone_number}</p>
        <br /><br />
        <h3>Payment Information</h3>
        <p>Credit Card #: {credit_card}</p>
 </div>       
        <br /><br />
        {/* <h3>Click to checkout</h3> */}
        <button className="check-out-btn"onClick={() => this.props.confirmPurchase(this.props.loggedInUser.id, this.props)}>Checkout</button>
      </div>
    )
  }

    return(
      <div>
        <CartNavbar 
          loggedInUser={this.props.loggedInUser} 
          logoutUser={this.props.logoutUser}
        />
        <br /><br /><br /><br /><br />
        <h3>This cart is lonely, Go buy some cupcakes!</h3><br />
      </div>
    )
  }
}
