import React from 'react'
import cupcakes from "../cupcake_data";
import CupcakeCard from "./CupcakeCard";
import Navbar from './Navbar'

class CupcakeContainer extends React.Component {

  state = {
      cupcakes: []
  }
  fetchCupCakes=()=>{
fetch('http://localhost:4000/cupcakes')
.then(resp=>resp.json())
.then((data)=>{
  this.setState({cupcakes:data})
})
  }
  componentDidMount(){
    this.fetchCupCakes()
  }

  render() {
      console.log(this.state.cupcakes)
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
