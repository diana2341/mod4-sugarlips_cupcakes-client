import React, { Component } from 'react'
import CartNavbar from './CartNavbar'

export default class Cart extends Component {
  
  render(){
    const {cupcakesInCart} = this.props
    const {username} = this.props.loggedInUser

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
            <tr>
              <td>{cupcake.name}</td>
              <td>{cupcake.flavor}</td>
              <td>${cupcake.price}</td>
              <td>{cupcakeQTY[cupcake.name]}</td>
              <td><button onClick={() => this.props.removeCupcakeFromCart(this.props.loggedInUser.id, cupcake.id)}>Remove Cupcake</button></td>
            </tr>
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
        <h3>{username ? `${username}'s current Cart` : 'Log in to shop our cupcakes!'}</h3><br />
        {cupcakesInCart ? 
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Flavor</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
            </thead>
            <tbody>
              {cupcakesInCart ? renderCupcakeRows() : null} 
            </tbody>
          </table>
        : null }
        <h3>{cupcakesInCart ? `Your total is: $${cupcakeTotal()}` : null}</h3>
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
        <h3>Your cart is empty! Go buy some cupcakes!</h3><br />
      </div>
    )
  }
}
