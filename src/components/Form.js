import React from 'react'
import { Link } from 'react-router-dom';


const Form = props => {

  const {
    username, password, first_name, last_name, address_1, address_2, city, state, zip_code, phone_number, credit_card
  } = props.form

  const {form, handleFormChange, handleSignupSubmit, history} = props

  return (
    <div>
      {/* <!-- card ui --> */}
      <div className="con">
        <div className="card">
          <div className="about">
            <h1 className="text-c">Sign up</h1>
            <p className="text-c">Join Our Sugar lips Community</p>
          </div>
          <form autoComplete="off">

          <div className="inputs">
            <input
              onChange={handleFormChange}
              type="text"
              name="username"
              value={username}
              placeholder="Username"
            />
            <input
              onChange={handleFormChange}
              type="text"
              name="password"
              value={password}
              placeholder="Password" 
            />
            <h3>Additional Information</h3>
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="first_name" 
              value={first_name}
              placeholder="First Name" 
              required
            />
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="last_name" 
              value={last_name}
              placeholder="Last Name"
            />
            <input 
            
              onChange={handleFormChange} 
              type="text" 
              name="address_1" 
              value={address_1}
              placeholder="Adress 1"
              required
            />
            <input
              onChange={handleFormChange} 
              type="text" 
              name="address_2" 
              value={address_2} 
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
              name="zip_code" 
              value={zip_code}
              placeholder="Zipcode" 
             required
            />
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="credit_card" 
              value={credit_card}
              placeholder="Credit card" 
            />
            <input   
              onChange={handleFormChange} 
              type="text" 
              name="phone_number" 
              value={phone_number} 
              placeholder="Phone number"
              required
            /><br/>

            <label className="text-c">State: </label>
            <select 
              className="select" 
              onChange={handleFormChange}
              name="state"
              value={state}
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

            <button 
              onClick={event => {
                handleSignupSubmit(event, form)
                history.push('/cupcakes')
                }}
              className="submit ">SIGN UP</button>

            <div className="login">
              <label id="login" ><p className="text-c"> Already a member! <Link to="/login"><span>Login</span></Link></p></label> 
            </div>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default Form
