import React from 'react'
import { Link } from 'react-router-dom';

const Form = props => {

  const {
    firstName, lastName, address1, address2, city, state, zipcode, phoneNumber, creditCard
  } = props.form

  const {handleFormChange} = props

  return (
    <div>
      {/* <!-- card ui --> */}
      <div className="con">
        <div className="card">
          <div className="about">
            <h1>Sign up</h1>
            {/* <!--       <h2>oDsoky .<span>inc</span></h2> --> */}
            <p>Join Our Sugar lips Community</p>
          </div>
          <form autoComplete="off">

          <div className="inputs">
          {/* <!--  <i class="fa fa-envelope-o" aria-hidden="true"></i> --> */}
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="firstName" 
              value={firstName}
              placeholder="First Name" 
              required
            />
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="lastName" 
              value={lastName}
              placeholder="Last Name"
            />
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="address1" 
              value={address1}
              placeholder="Adress 1"
              required
            />
            <input
              onChange={handleFormChange} 
              type="text" 
              name="address2" 
              value={address2} 
              placeholder="Address 2 (optional)"
            />
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="city" 
              value={city}
              placeholder="City"
            />
            <input  
              onChange={handleFormChange} 
              type="text" 
              name="zipcode" 
              value={zipcode}
              placeholder="Zipcode" 
             required
            />
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="creditCard" 
              value={creditCard}
              placeholder="Credit card" 
            />
            <input   
              onChange={handleFormChange} 
              type="text" 
              name="phoneNumber" 
              value={phoneNumber} 
              placeholder="Phone number"
              required
            /><br/>

            <label>State: </label>
            <select 
              className="select" 
              onChange={handleFormChange}
              name="state"
              value="state"
            >
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
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select><br />   
          </div>
            <button className="submit">SIGN UP</button>

            <div className="login">
              <label id="login" ><p> Already a member! <Link to="/login"><span>Login</span></Link></p></label> 
            </div>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default Form
