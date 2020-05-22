import React, { Component } from 'react'
import HomePage from './HomePage'
import Profile from './Profile'
import Form from './Form'
import Signup from './Signup'
import EditProfile from './EditProfile'

export class MainContainer extends Component {

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
      <div>
        <HomePage/>
        <Profile 
          currentUser={this.state.currentUser} />
        <Signup 
          form={this.state.form}
          handleChange={this.handleChange} />
        <EditProfile 
          form={this.state.form}
          handleChange={this.handleChange} />
        < Form 
          form={this.state.form}
          handleChange={this.handleChange} />
      </div>
    )
  }
}

export default MainContainer
