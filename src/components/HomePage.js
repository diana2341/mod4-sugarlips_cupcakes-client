import React from 'react'
import Login from './Login'

class HomePage extends React.Component {

  render() {
    return( 
      <div>
        <h3>{this.props.sample}</h3>
        <h1>Make yourself at home with gourmet cupcake.</h1>
        <Login />
      </div>
    )
  }
}

export default HomePage
