import React from 'react'
import cupcakes from "../cupcake_data";
import CupcakeCard from "./CupcakeCard";
import Navbar from './Navbar'

class CupcakeContainer extends React.Component {

  state = {
      cupcakes: cupcakes
  }

  render() {
      // console.log(this.state.cupcakes)
    return( 
      <div>
        <Navbar />
        <div className="cupcake-container">
          { this.state.cupcakes.map((cupcake,index)=>{
              return <CupcakeCard key={index} cupcakes={cupcake}/>})
          }
        </div>
      </div>
    )
  }
}

export default CupcakeContainer
