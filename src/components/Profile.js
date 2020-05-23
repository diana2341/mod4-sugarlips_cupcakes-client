import React from 'react'
import Navbar from './Navbar'

const Profile = props => {

  const {firstName, lastName, phoneNumber, creditCard, address1, address2, city, state, zipcode} = props.currentUser
  
    return (
      <div>
        <Navbar />
        <h1>Profile Page</h1>
        <h2>{firstName} {lastName}</h2>
        <h3>Address</h3>
        {address1} <br />
        {address2} <br />
        {city}, {state} {zipcode}

        <h3>Contact Information</h3>
        {phoneNumber}

        <h3>Payment Information</h3>
        <p>Credit Card: {creditCard}</p>

        <button>Delete Account</button>
        <button>Edit Profile</button>
      </div>
    )
}

export default Profile
