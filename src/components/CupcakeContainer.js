import React from 'react'
// import cupcakes from "../cupcake_data";
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
      console.log(this.props)
    return( 
      <div>
        <Navbar />
        <div className="cupcake-container">
          { this.state.cupcakes.map((cupcake)=>{
              return <CupcakeCard key={cupcake.id} cupcakes={cupcake}{...this.props}/>})
          }
        </div>
      </div>
    )
  }
}

export default CupcakeContainer
