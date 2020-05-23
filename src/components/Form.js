import React from 'react'

const Form = props => {

  const {firstName, lastName, address1, address2, city, state, zipcode, phoneNumber, creditCard} = props.form

  const {handleChange} = props

  return (
    <div>
      <form className="login-box">
      <h3>Account Information</h3><br />
        <label>First name: </label>
        <div className="user-box">
        <input 
          onChange={handleChange} 
          type="text" 
          name="firstName" 
          value={firstName}></input><br />
        </div>


        <label>Last name: </label>
        <div className="user-box">
        <input 
          onChange={handleChange} 
          type="text" 
          name="lastName" 
          value={lastName}></input><br />
          </div>


        <label>Address1: </label>
        <div className="user-box">
        <input 
          onChange={handleChange} 
          type="text" 
          name="address1" 
          value={address1}></input><br />
        </div>
          
        <label>Address2: </label>
        <div className="user-box">
        <input 
          onChange={handleChange} 
          type="text" 
          name="address2" 
          value={address2}></input><br />
          </div>

        <label>City: </label>
        <div className="user-box">
        <input 
          onChange={handleChange} 
          type="text" 
          name="city" 
          value={city}></input><br />
          </div>

        <label>State: </label>
        <select
          onChange={handleChange}
          name="state"
          value={state} >
          <option>Select State</option>
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WY">WY</option>
          <option value="WI">WI</option>
        </select><br />

        <label>Zipcode: </label>
        <input 
          onChange={handleChange} 
          type="text" 
          name="zipcode" 
          value={zipcode}></input><br />

        <label>Phone number: </label>
        <input 
          onChange={handleChange} 
          type="text" 
          name="phoneNumber" 
          value={phoneNumber}></input><br />

        <label>Credit card: </label>
        <input 
          onChange={handleChange} 
          type="text" 
          name="creditCard" 
          value={creditCard}></input><br />

        <input type="submit"/>
      </form>
    </div>
  )
}

export default Form
