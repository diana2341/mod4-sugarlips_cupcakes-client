import React from 'react'


export default class EditProfile extends React.Component {
  state={
    
    address_1: this.props.loggedInUser.address_1,
      address_2: this.props.loggedInUser.address_2,
      city: this.props.loggedInUser.city,
      state: this.props.loggedInUser.state,
      zip_code: this.props.loggedInUser.zip_code,
      phone_number: this.props.loggedInUser.phone_number,
      credit_card: this.props.loggedInUser.credit_card
  }
  updateProfile=()=>{
    console.log(this.props.loggedInUser.id)
    const {  phone_number, credit_card, address_1, address_2, city, state, zip_code} = this.state

      fetch(`http://localhost:4000/users/${this.props.loggedInUser.id}`,{
    
        method:"PATCH",
        headers:{
          
          'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body:JSON.stringify({
          address_1,
      address_2,
      city,
      state,
      zip_code,
      phone_number,
      credit_card
         
        })
      })
      .then(()=>this.props.history.push('/profile'))
    }

    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    }
  render(){
  // const {form, handleChange} = this.props
const {first_name, last_name, phone_number, credit_card, address_1, address_2, city, state, zip_code} = this.state

  return (
    <div>
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

          <p className="info-card" ><span className="info-label"  >Address 1:</span> <input name ="address_1"  type="text" value={address_1} onChange={this.handleChange}/> </p><br/>
          <p className="info-card"> <span className="info-label" >Address 2:</span> <input name ="address_2"  type="text" value={address_2} onChange={this.handleChange}/> </p><br/>
          <p className="info-card"> <span className="info-label" >city:</span> <input name ="city"  type="text" value={city} onChange={this.handleChange}/> </p><br/>
          <p className="info-card"> <span className="info-label" >state:</span><input name ="state"  type="text" value={state} onChange={this.handleChange}/> </p><br/>
          <p className="info-card"><span className="info-label" >zipcode:</span><input  name ="zip_code" type="text" value={zip_code} onChange={this.handleChange}/></p><br/>

          <p className="info-label"> Contact Information</p>
          <p className="info-label">Phone number: <span className="info-card"> <input name="phone_number"  type="text" value={phone_number} onChange={this.handleChange}/></span> </p><br/>

          <p className="info-label">Payment Information</p>
          <p className="info-label">Credit Card:  <span className="info-card"> <input  name="credit_card" type="text" value={credit_card} onChange={this.handleChange}/></span></p><br/>
        </div>

        <div className="profile-buttons">
          <button className="profile-button-design" onClick={()=>this.updateProfile()}>&nbsp; update &nbsp;</button>
        </div>
       
       </div>
      </div>
   
    </div>
  )
  }
}

