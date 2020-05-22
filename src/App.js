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
    }
  }

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form, [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="App">
          <Route 
            path="/" 
            render={(routerProps) => 
            <HomePage {...routerProps} />}
            />
          <Route 
            path="/profile" 
            render={(routerProps) => <Profile 
              currentUser={this.state.currentUser} />} 
            />
          <Route 
            path="/sign-up" 
            render={(routerProps) => <Signup 
              form={this.state.form}
              handleChange={this.handleChange} />} 
            />
          <Route 
            path="/edit-profile" 
            render={(routerProps) => <EditProfile 
              form={this.state.form}
              handleChange={this.handleChange} />} 
            />
          <Route 
            path="/cupcakes" 
            render={() => <CupcakeContainer />}
            />
            <Route 
            path="/log-in" 
            render={(routerProps) => <Login 
              form={this.state.form}
              handleChange={this.handleChange}
              {...routerProps} />} 
            />
      </div>
    )
  }
}

export default App;
