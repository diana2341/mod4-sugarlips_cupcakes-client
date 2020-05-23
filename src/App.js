import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import Signup from './components/Signup'
import EditProfile from './components/EditProfile'
import CupcakeContainer from './components/CupcakeContainer'
import Login from './components/Login'


class App extends Component {

  state = {
    currentUser: {
      firstName: "Uriel",
      lastName: "Rodriguez",
      address1: "39 Momar Drive",
      address2: "private home",
      city: "Bergenfield",
      state: "NJ",
      zipcode: "07621",
      phoneNumber: "347-264-0904",
      creditCard: "345465788909"
    },
    form: {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      phoneNumber: "",
      creditCard: ""
    },
    username: '',
    loggedInUser: {}
  }

  handleFormChange = event => {
    this.setState({
      form: {
        ...this.state.form, [event.target.name]: event.target.value
      }
    })
  }

  loginUser = username => {
    fetch(`http://localhost:3000/users/${username}`)
    .then(resp => resp.json())
    .then(user => this.setState({
      loggedInUser: user
      })
    )
  }
  
  handleLoginChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleLoginSubmit = (event, username) => {
    event.preventDefault()
    this.loginUser(username)
  }

  render() {
    return (
      <div className="App">
        <Route 
          path="/profile" 
          render={(routerProps) => <Profile 
          currentUser={this.state.currentUser} />} 
        />
        <Route 
          path="/signup" 
          render={(routerProps) => <Signup 
          form={this.state.form}
          handleFormChange={this.handleFormChange} />} 
        />
        <Route 
          path="/edit-profile" 
          render={(routerProps) => <EditProfile 
          form={this.state.form}
          handleFormChange={this.handleFormChange} />} 
        />
        <Route 
          path="/cupcakes" 
          render={() => <CupcakeContainer />}
        />
        <Route 
          exact path="/login" 
          render={(routerProps) => <Login 
          username={this.state.username}
          loginUser={this.loginUser}
          handleLoginChange={this.handleLoginChange}
          handleLoginSubmit={this.handleLoginSubmit}
          {...routerProps} />} 
        />
        <Route 
          exact path="/" 
          render={(routerProps) => 
          <HomePage {...routerProps} />}
        />
      </div>
    )
  }
}

export default App;
