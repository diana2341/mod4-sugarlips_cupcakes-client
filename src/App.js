import React, { Component } from 'react';
import './App.css';

// testing
import Profile from './components/Profile'

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
    }
  }

  render() {
    return (
      <div className="App">
        <Profile 
          currentUser={this.state.currentUser} />
      </div>
    )
  }
}

export default App;
  