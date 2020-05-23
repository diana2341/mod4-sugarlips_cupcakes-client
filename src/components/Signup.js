// import React from 'react'

// const Signup = props => {

//   const {handleChange, handleSignupSubmit, username, password} = props

//   return (
//     <div>
//       <h2>Sign Up</h2>

//       <form>
//           <div className="user-box">
//             <label>Username</label>
//             <input 
//               onChange={handleChange}
//               type="text" 
//               name="username" 
//               value={username} />
//           </div>
      
//           <div className="user-box">
//             <label >Password</label>
//             <input
//               onChange={handleChange}
//               type="password" 
//               name="password"
//               value={password} />
//           </div>
              
//           <a 
//             onClick={event => {
//               handleSignupSubmit(event, {username: username, password: password})
//               props.history.push('/cupcakes')
//               }
//             }
//             href="">
//             <span></span>
//             <span></span>
//             <span></span>
//             <span></span>
//             Enter
//           </a>
//         </form>
//     </div>
//   )
// }

// export default Signup


// import React from 'react'
// import { Link } from 'react-router-dom';

// const Form = props => {

//   const {firstName, lastName, address1, address2, city, zipcode, phoneNumber, creditCard} = props.form

//   const {handleChange} = props

//   return (
//     <div>
// {/* <!-- card ui --> */}
// <div className="con">
//   <div className="card">
//     <div className="about">
//       <h1>Sign up</h1>
// {/* <!--       <h2>oDsoky .<span>inc</span></h2> --> */}
//       <p>Join Our Sugar lips Community</p>
//     </div>
//     <form autoComplete="off">

//       <div className="inputs">
// {/* <!--         <i class="fa fa-envelope-o" aria-hidden="true"></i> --> */}
//         <input 
//          onChange={handleChange} 
//           type="text" 
//           name="firstName" 
//           value={firstName}
//           placeholder="First Name" 
//           required
//           />


//         <input 
//          onChange={handleChange} 
//           type="text" 
//           name="lastName" 
//           value={lastName}
//            placeholder="Last Name"
//            />
          
//         <input onChange={handleChange} 
//           type="text" 
//           name="address1" 
//           value={address1}
//           placeholder="Adress 1"
//           required
//             />
//         <input
//           onChange={handleChange} 
//           type="text" 
//           name="address2" 
//           value={address2} 
//           placeholder="Address 2 (optional)"
//            />
//            <input 
//           onChange={handleChange} 
//           type="text" 
//           name="city" 
//           value={city}
//           placeholder="City"

//           />
//         <input  
//           onChange={handleChange} 
//           type="text" 
//           name="zipcode" 
//           value={zipcode}
//           placeholder="Zipcode" 
//            required
//            />
//          <input 
//           onChange={handleChange} 
//           type="text" 
//           name="creditCard" 
//           value={creditCard}
//           placeholder="Credit card" 

//           />
//         <input   
//           onChange={handleChange} 
//           type="text" 
//           name="phoneNumber" 
//           value={phoneNumber} 
//           placeholder="Phone number"
//           required/><br/>

//         <label>State: </label>
//         <select className="select" onChange={handleChange}>
//           <option>Select State</option>
//           <option name="state" value="AL">AL</option>
//           <option name="state" value="AK">AK</option>
//           <option name="state" value="AZ">AZ</option>
//           <option name="state" value="AR">AR</option>
//           <option name="state" value="CA">CA</option>
//           <option name="state" value="CO">CO</option>
//           <option name="state" value="CT">CT</option>
//           <option name="state" value="DE">DE</option>
//           <option name="state" value="FL">FL</option>
//           <option name="state" value="GA">GA</option>
//           <option name="state" value="HI">HI</option>
//           <option name="state" value="ID">ID</option>
//           <option name="state" value="IL">IL</option>
//           <option name="state" value="IN">IN</option>
//           <option name="state" value="IA">IA</option>
//           <option name="state" value="KS">KS</option>
//           <option name="state" value="KY">KY</option>
//           <option name="state" value="LA">LA</option>
//           <option name="state" value="ME">ME</option>
//           <option name="state" value="MD">MD</option>
//           <option name="state" value="MA">MA</option>
//           <option name="state" value="MI">MI</option>
//           <option name="state" value="MN">MN</option>
//           <option name="state" value="MS">MS</option>
//           <option name="state" value="MO">MO</option>
//           <option name="state" value="MT">MT</option>
//           <option name="state" value="NE">NE</option>
//           <option name="state" value="NV">NV</option>
//           <option name="state" value="NH">NH</option>
//           <option name="state" value="NJ">NJ</option>
//           <option name="state" value="NM">NM</option>
//           <option name="state" value="NY">NY</option>
//           <option name="state" value="NC">NC</option>
//           <option name="state" value="ND">ND</option>
//           <option name="state" value="OH">OH</option>
//           <option name="state" value="OK">OK</option>
//           <option name="state" value="OR">OR</option>
//           <option name="state" value="PA">PA</option>
//           <option name="state" value="RI">RI</option>
//           <option name="state" value="SC">SC</option>
//           <option name="state" value="SD">SD</option>
//           <option name="state" value="TN">TN</option>
//           <option name="state" value="TX">TX</option>
//           <option name="state" value="UT">UT</option>
//           <option name="state" value="VT">VT</option>
//           <option name="state" value="VA">VA</option>
//           <option name="state" value="WA">WA</option>
//           <option name="state" value="WV">WV</option>
//           <option name="state" value="WI">WI</option>
//           <option name="state" value="WY">WY</option>
//         </select><br />   
//       </div>
//     <button className="submit">SIGN UP</button>

//       <div className="login">
//       <label id="login" ><p> Already a member! <Link to="/login"><span>Login</span></Link></p></label> 
//       </div>
//       </form> 
//     </div>
//   </div>
//  </div>
//   )
// }

// export default Form

import React from 'react'
import Form from './Form'

const Signup = props => {

  return (
    <div>
      <h1>Sign Up</h1>
      <Form
        form={props.form}
        handleFormChange={props.handleFormChange}
        username={props.username}
        password={props.password}
        handleSignupSubmit={props.handleSignupSubmit} 
      />
    </div>
  )
}

export default Signup
