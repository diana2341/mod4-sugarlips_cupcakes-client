import React from 'react'
import Navbar from './Navbar'


export default class EditProfile extends React.Component {
  // state = {
  //   address_1: this.props.loggedInUser.address_1,
  //   address_2: this.props.loggedInUser.address_2,
  //   city: this.props.loggedInUser.city,
  //   state: this.props.loggedInUser.state,
  //   zip_code: this.props.loggedInUser.zip_code,
  //   phone_number: this.props.loggedInUser.phone_number,
  //   credit_card: this.props.loggedInUser.credit_card
  // }


  render(){
    // const {form, handleChange} = this.props
    const {first_name, last_name, phone_number, credit_card, address_1, address_2, city, state, zip_code} = this.props.form

    const {loggedInUser, logoutUser} = this.props

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
          <h1 className= "profile-titile">Edit Profile </h1>

          <div className="card-content">
            <div className="profileImg"> <img src="https://cdn4.vectorstock.com/i/1000x1000/76/43/muffin-with-kawaii-face-design-vector-10657643.jpg" alt="img"style={{"width":"110px"}}/>
            </div>
        
          <h2 className="username">{first_name} {last_name}</h2>
          <div className="profile-information">
            <h3 className="your-info">Your information</h3><br/>

            <p className="info-card" ><span className="info-label"  >Address 1:</span> <input name ="address_1"  type="text" value={address_1} onChange={this.props.handleEditProfileChange}/> </p><br/>
            <p className="info-card"> <span className="info-label" >Address 2:</span> <input name ="address_2"  type="text" value={address_2} onChange={this.props.handleEditProfileChange}/> </p><br/>
            <p className="info-card"> <span className="info-label" >city:</span> <input name ="city"  type="text" value={city} onChange={this.props.handleEditProfileChange}/> </p><br/>
            <p className="info-card"> <span className="info-label" >state:</span><input name ="state"  type="text" value={state} onChange={this.props.handleEditProfileChange}/> </p><br/>
            <p className="info-card"><span className="info-label" >zipcode:</span><input  name ="zip_code" type="text" value={zip_code} onChange={this.props.handleEditProfileChange}/></p><br/>

            <p className="info-label"> Contact Information</p>
            <p className="info-label">Phone number: <span className="info-card"> <input name="phone_number"  type="text" value={phone_number} onChange={this.props.handleEditProfileChange}/></span> </p><br/>

            <p className="info-label">Payment Information</p>
            <p className="info-label">Credit Card:  <span className="info-card"> <input  name="credit_card" type="text" value={credit_card} onChange={this.props.handleEditProfileChange}/></span></p><br/>
          </div>

          <div className="profile-buttons">
            <button className="profile-button-design" onClick={()=> {
              this.props.updateProfile()
              this.props.history.push('/profile')
              }
            }>&nbsp; update &nbsp;</button>
          </div>
        
        </div>
        </div>
    
      </div>
    )
  }
}

