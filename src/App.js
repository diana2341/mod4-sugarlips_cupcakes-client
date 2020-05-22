// import React from 'react';
// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import Form from './components/Form'
import Signup from './components/Signup'
import EditProfile from './components/EditProfile'
import CupcakeContainer from './components/CupcakeContainer'
import Navbar from './components/Navbar'

import { Route, Link, Switch, Redirect } from 'react-router-dom';


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
     <Navbar/>


        <Switch>
    <Route path="/home" render={(routerProps) =><HomePage {...routerProps}/>}/>
    <Route path="/profile" render={(routerProps) => <Profile 
            currentUser={this.state.currentUser} />}/>
    <Route path="/sign-up" render={(routerProps) =><Signup 
            form={this.state.form}
            handleChange={this.handleChange} />}/>
    <Route path="/edit-profile" render={(routerProps) =><EditProfile 
            form={this.state.form}
            handleChange={this.handleChange} />}/>
    <Route path="/form" render={(routerProps) =>< Form 
            form={this.state.form}
            handleChange={this.handleChange} />}/>
            {/* form for? */}
    <Route path="/cupcakes" render={()=><CupcakeContainer/>}/>
       
          </Switch>
      </div>
    )
  }
}

export default App;
  