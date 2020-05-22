import React from 'react'

const Form = props => {

  const {firstName, lastName, address1, address2, city, zipcode, phoneNumber, creditCard} = props.form

  const {handleChange} = props

  return (
    <div>
      <form>
        <label>First name: </label>
        <input 
          onChange={handleChange} 
          type="text" 
          name="firstName" 
          value={firstName}></input><br />

        <label>Last name: </label>
        <input 
          onChange={handleChange} 
          type="text" 
          name="lastName" 
          value={lastName}></input><br />

        <label>Address1: </label>
        <input 
          onChange={handleChange} 
          type="text" 
          name="address1" 
          value={address1}></input><br />
          
        <label>Address2: </label>
        <input 
          onChange={handleChange} 
          type="text" 
          name="address2" 
          value={address2}></input><br />

        <label>City: </label>
        <input 
          onChange={handleChange} 
          type="text" 
          name="city" 
          value={city}></input><br />

        <label>State: </label>
        <select onChange={handleChange}>
          <option>Select State</option>
          <option name="state" value="AL">AL</option>
          <option name="state" value="AK">AK</option>
          <option name="state" value="AZ">AZ</option>
          <option name="state" value="AR">AR</option>
          <option name="state" value="CA">CA</option>
          <option name="state" value="CO">CO</option>
          <option name="state" value="CT">CT</option>
          <option name="state" value="DE">DE</option>
          <option name="state" value="FL">FL</option>
          <option name="state" value="GA">GA</option>
          <option name="state" value="HI">HI</option>
          <option name="state" value="ID">ID</option>
          <option name="state" value="IL">IL</option>
          <option name="state" value="IN">IN</option>
          <option name="state" value="IA">IA</option>
          <option name="state" value="KS">KS</option>
          <option name="state" value="KY">KY</option>
          <option name="state" value="LA">LA</option>
          <option name="state" value="ME">ME</option>
          <option name="state" value="MD">MD</option>
          <option name="state" value="MA">MA</option>
          <option name="state" value="MI">MI</option>
          <option name="state" value="MN">MN</option>
          <option name="state" value="MS">MS</option>
          <option name="state" value="MO">MO</option>
          <option name="state" value="MT">MT</option>
          <option name="state" value="NE">NE</option>
          <option name="state" value="NV">NV</option>
          <option name="state" value="NH">NH</option>
          <option name="state" value="NJ">NJ</option>
          <option name="state" value="NM">NM</option>
          <option name="state" value="NY">NY</option>
          <option name="state" value="NC">NC</option>
          <option name="state" value="ND">ND</option>
          <option name="state" value="OH">OH</option>
          <option name="state" value="OK">OK</option>
          <option name="state" value="OR">OR</option>
          <option name="state" value="PA">PA</option>
          <option name="state" value="RI">RI</option>
          <option name="state" value="SC">SC</option>
          <option name="state" value="SD">SD</option>
          <option name="state" value="TN">TN</option>
          <option name="state" value="TX">TX</option>
          <option name="state" value="UT">UT</option>
          <option name="state" value="VT">VT</option>
          <option name="state" value="VA">VA</option>
          <option name="state" value="WA">WA</option>
          <option name="state" value="WV">WV</option>
          <option name="state" value="WI">WI</option>
          <option name="state" value="WY">WY</option>
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
