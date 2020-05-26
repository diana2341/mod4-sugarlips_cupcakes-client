import React, { Component } from 'react'

export default class Cart extends Component {
  
  render(){
    const {username, cupcakes} = this.props.loggedInUser

    // array of prices of each cupcake to sum into a total value
    const cupcakesPrices = cupcakes.map(cupcake => cupcake.price)

    // helper method that adds up price of each cupcake
    const sumPrice = (accumulator, currentValue) => accumulator + currentValue

    // method to add up total price of all cupcakes in cart
    const cupcakeTotal = () => {
      return cupcakesPrices.reduce(sumPrice)
    }
  
    // object to track the qty of each cupcake in cart
    let cupcakeQTY = {}

    // variable assigned to return value from method that removes duplicate cupcakes from cart (only want to represent unique cupcake in html table)
    let removedCupcakesDuplicates = removeDuplicates(cupcakes, 'name')

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

    // method call to populate cupcakeQTY object that tracks how many cupcakes are in the cart
    cupcakes.forEach(recordQTY)
  
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
            </tr>
          )
        })
      )
    }

    return(
      <div>
        <h3>{username}'s current Cart</h3>
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
            {renderCupcakeRows()} 
          </tbody>
        </table>
        <h3>{ cupcakes ? `Your total is: $${cupcakeTotal()}` : null }</h3>
      </div>
    )
  }
}
