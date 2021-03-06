import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import Signup from './components/Signup'
import EditProfile from './components/EditProfile'
import CupcakeContainer from './components/CupcakeContainer'
import Login from './components/Login'
import CssCupcake from './components/CssCupcake'
import CupcakeProfile from './components/CupcakeProfile'
import Search from './components/Search'
import Sort from './components/Sort'
import Cart from './components/Cart'
import ConfirmPurchase from './components/ConfirmPurchase'



class App extends Component {

  state = {
    form: {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      zip_code: "",
      phone_number: "",
      credit_card: ""
    },
    username: '',
    loggedInUser: {},
    cupcakesInCart: []
  }

  handleFormChange = event => {
    this.setState({
      form: {
        ...this.state.form, [event.target.name]: event.target.value
      }
    })
  }

  loginUser = username => {
    fetch(`http://localhost:4000/users/${username}`)
    .then(resp => resp.json())
    .then(user => this.setState({
      loggedInUser: user,
      cupcakesInCart: user.cupcakes,
      form: {
        username: user.username,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        address_1: user.address_1,
        address_2: user.address_2,
        city: user.city,
        state: user.state,
        zip_code: user.zip_code,
        phone_number: user.phone_number,
        credit_card: user.credit_card
      }
      })
    )
  }

  logoutUser = () => {
    this.setState({
      loggedInUser: {},
      cupcakesInCart: [],
      form: {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        zip_code: "",
        phone_number: "",
        credit_card: ""
      }
    })
  }

  createNewUser = user => {
    fetch(`http://localhost:4000/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => this.setState({
      loggedInUser: user
      }))
  }
  
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleLoginSubmit = (event, username) => {
    event.preventDefault()
    this.loginUser(username)
  }

  handleSignupSubmit = (event, user) => {
    event.preventDefault()
    this.createNewUser(user)
  }

  addToCart = (cupcakeID, userID) => {
    fetch(`http://localhost:4000/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: userID,
        cupcake_id: cupcakeID
      })
    })
    .then(resp => resp.json())
    .then(cart => this.setState({
      cupcakesInCart: [...this.state.cupcakesInCart, cart.cupcake]
    }))
  }

  removeCupcakeFromCart = (userID, cupcakeID) => {
    fetch('http://localhost:4000/carts/remove', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: userID,
        cupcake: cupcakeID
      })
    })
    .then(resp => resp.json())
    .then(cupcakes => {
        this.setState({
          cupcakesInCart: cupcakes
        })
    })
  }

  confirmPurchase = (userID, props) => {
    fetch('http://localhost:4000/carts/purchase', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: userID
      })
    })
    .then(resp => resp.json())
    .then(
      this.setState({
        cupcakesInCart: []
      }, props.history.push('/purchase-confirmation')
      )
    )
  }


  updateProfile = () => {
    const {  phone_number, credit_card, address_1, address_2, city, state, zip_code} = this.state.form

    fetch(`http://localhost:4000/users/${this.state.loggedInUser.id}`, {
      method:"PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      body:JSON.stringify({
        address_1,
        address_2,
        city,
        state,
        zip_code,
        phone_number,
        credit_card 
      })
    })
    .then(resp => resp.json())
    .then(updatedProfile => this.setState({
      form: {
        username: updatedProfile.username,
        password: updatedProfile.password,
        first_name: updatedProfile.first_name,
        last_name: updatedProfile.last_name,
        address_1: updatedProfile.address_1,
        address_2: updatedProfile.address_2,
        city: updatedProfile.city,
        state: updatedProfile.state,
        zip_code: updatedProfile.zip_code,
        phone_number: updatedProfile.phone_number,
        credit_card: updatedProfile.credit_card
      }
    }))
  }

  handleEditProfileChange = event => {
    const {name, value} = event.target
    this.setState({
      form: {
        ...this.state.form, [name]: value
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Route 
          exact path="/profile" 
          render={(routerProps) => <Profile
            logoutUser={this.logoutUser}
            {...routerProps} 
            editInfo={this.editInfo}
            form={this.state.form}
            handleUpdate={this.handleUpdate}
           loggedInUser= {this.state.loggedInUser}/>
          } 
        />
        <Route 
          exact path="/signup" 
          render={(routerProps) => <Signup 
            form={this.state.form}
            handleFormChange={this.handleFormChange}
            handleSignupSubmit={this.handleSignupSubmit} 
            {...routerProps} />} 
        />
        <Route 
          exact path="/edit-profile" 
          render={(routerProps) => <EditProfile 
            form={this.state.form}
            updateProfile={this.updateProfile}
            handleEditProfileChange={this.handleEditProfileChange}
            logoutUser={this.logoutUser}
            loggedInUser= {this.state.loggedInUser}
            {...routerProps}
             />} 
        />
        <Route 
          exact path="/cupcakes" 
          render={(routerProps) => <CupcakeContainer
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser} 
            {...routerProps}
            sort={<Sort />}
            search={<Search />} />}
        />
        <Route 
          exact path="/login" 
          render={(routerProps) => <Login 
            username={this.state.username}
            handleChange={this.handleChange}
            handleLoginSubmit={this.handleLoginSubmit}
            {...routerProps} />} 
        />
        <Route 
          exact path="/" 
          render={(routerProps) => 
          <HomePage {...routerProps} />}
        />
        <Route 
          exact path="/animation" 
          render={() => <CssCupcake />}
        />
        <Route 
          exact path="/cupcakes/:id" 
          render={(routerProps) => <CupcakeProfile
            loggedInUser={this.state.loggedInUser}
            addToCart={this.addToCart}
            {...routerProps} />}
        />
        <Route 
        
          exact path='/cart'
          render={routerProps => <Cart 
            
            cupcakesInCart={this.state.cupcakesInCart}
            confirmPurchase={this.confirmPurchase}
            removeCupcakeFromCart={this.removeCupcakeFromCart}
            loggedInUser={this.state.loggedInUser}
            logoutUser={this.logoutUser}
            {...routerProps} />}
        />
        <Route 
          exact path='/purchase-confirmation'
          render={routerProps => <ConfirmPurchase
            loggedInUser={this.state.loggedInUser} 
            logoutUser={this.logoutUser}
            {...routerProps} 
          />}
        />
      </div>
    )
  }
}

export default App;
