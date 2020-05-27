import React from 'react'
import Navbar from './Navbar'



const Profile = props => {


  const {first_name, last_name, phone_number, credit_card, address_1, address_2, city, state, zip_code} = props.loggedInUser

  const {loggedInUser, logoutUser} = props
  const handleEdit=(event)=>{
    props.history.push('/edit-profile') 
  }
 
  // console.log(props.loggedInUser.first_name)
    return (
      
      <div>
        <Navbar
          loggedInUser={loggedInUser} 
          logoutUser={logoutUser}
        />

        <div className="card-profile">
          <div className="card-borders">
            <div className="border-top"></div>
            <div className="border-right"></div>
            <div className="border-bottom"></div>
            <div className="border-left"></div>
          </div>
         <h1 className= "profile-titile">Profile Page</h1>

        <div className="card-content">
          <div className="profileImg"> <img src="https://cdn4.vectorstock.com/i/1000x1000/76/43/muffin-with-kawaii-face-design-vector-10657643.jpg" alt="img"style={{"width":"110px"}}/>
          </div>
       
        <h2 className="username">{first_name} {last_name}</h2>
        <div className="profile-information">
          <h3 className="your-info">Your information</h3><br/>

          <p className="info-card" ><span className="info-label"  >Address 1:</span> {address_1} </p><br/>
          <p className="info-card"> <span className="info-label" >Address 2:</span> {address_2} </p><br/>
          <p className="info-card"> <span className="info-label" >city:</span> {city} </p><br/>
          <p className="info-card"> <span className="info-label" >state:</span>{state} </p><br/>
          <p className="info-card"><span className="info-label" >zipcode:</span>{zip_code} </p><br/>

          <p className="info-label"> Contact Information</p>
          <p className="info-label">Phone number: <span className="info-card"> {phone_number}</span> </p><br/>

          <p className="info-label">Payment Information</p>
          <p className="info-label">Credit Card:  <span className="info-card"> {credit_card}</span></p><br/>
        </div>

        <div className="profile-buttons">
          <button className="profile-button-design" onClick={()=>handleEdit()}>&nbsp; Edit Profile &nbsp;</button>
        </div>

       </div>
      </div>
     
     </div>
     
    )
}

export default Profile
