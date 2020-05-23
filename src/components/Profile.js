import React from 'react'

const Profile = props => {

  const {firstName, lastName, phoneNumber, creditCard, address1, address2, city, state, zipcode} = props.currentUser
  
    return (
      <div>
        
        <div class="card-profile">
  <div class="card-borders">
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>
  </div>
  <div class="card-content">
  <div class="profileImg"> <img src="https://cdn4.vectorstock.com/i/1000x1000/76/43/muffin-with-kawaii-face-design-vector-10657643.jpg" style={{"width":"110px"}}/>
    
</div>
    {/* <div class="username">alphardex</div> */}
        <h1>Profile Page</h1>
        <h2 class="username">{firstName} {lastName}</h2>
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
        {/* </div> */}
       </div>
      </div>
     </div>
    )
}

export default Profile
