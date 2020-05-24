import React from 'react'
import Navbar from './Navbar'

const Profile = props => {

  const {firstName, lastName, phoneNumber, creditCard, address1, address2, city, state, zipcode} = props.currentUser
  
    return (
      <div>
        <Navbar />
         <h1>Profile Page</h1>
        <div class="card-profile">
          <div className="card-borders">
            <div className="border-top"></div>
            <div className="border-right"></div>
            <div className="border-bottom"></div>
            <div className="border-left"></div>
          </div>

        <div className="card-content">
          <div className="profileImg"> <img src="https://cdn4.vectorstock.com/i/1000x1000/76/43/muffin-with-kawaii-face-design-vector-10657643.jpg" alt="img"style={{"width":"110px"}}/>
          </div>
       
        <h2 className="username">{firstName} {lastName}</h2>
        <div className="profile-information">
          <h3>Address</h3>

          <p className="info-p" ><strong >Address 1:</strong> {address1} </p><br/>
          <p className="info-p"> <strong >Address 2:</strong> {address2} </p><br/>
          <p className="info-p"> <strong >city:</strong> {city} </p><br/>
          <p className="info-p"> <strong >state:</strong>{state} </p><br/>
          <p className="info-p"><strong >zipcode:</strong>{zipcode} </p><br/>

          <h3>Contact Information</h3>
          {phoneNumber}

          <h3>Payment Information</h3>
          <p>Credit Card: {creditCard}</p>
        </div>

        <div className="profile-buttons">
          <button className="profile-button-design">Delete Account</button><br/>
          <button className="profile-button-design">Edit Profile</button>
        </div>
       
       </div>
      </div>
     </div>
    )
}

export default Profile
