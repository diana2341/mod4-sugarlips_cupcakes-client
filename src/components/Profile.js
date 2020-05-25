import React from 'react'
import Navbar from './Navbar'


const Profile = props => {

  const {first_name, last_name, phone_number, credit_card, address_1, address_2, city, state, zip_code} = props.loggedInUser

  const {loggedInUser, logoutUser} = props
  
    return (
      <div>
        <Navbar
          loggedInUser={loggedInUser} 
          logoutUser={logoutUser}
        />

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
       
        <h2 className="username">{first_name} {last_name}</h2>
        <div className="profile-information">
          <h3>Address</h3>

          <p className="info-p" ><strong >Address 1:</strong> {address_1} </p><br/>
          <p className="info-p"> <strong >Address 2:</strong> {address_2} </p><br/>
          <p className="info-p"> <strong >city:</strong> {city} </p><br/>
          <p className="info-p"> <strong >state:</strong>{state} </p><br/>
          <p className="info-p"><strong >zipcode:</strong>{zip_code} </p><br/>

          <h3>Contact Information</h3>
          {phone_number}

          <h3>Payment Information</h3>
          <p>Credit Card: {credit_card}</p>
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
