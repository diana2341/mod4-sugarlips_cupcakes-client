import React from 'react'
import CssCupcake from './CssCupcake'

class CupcakeCard extends React.Component {

    
    render() {
        console.log(this.props)
        const{name,flavor,image,id}=this.props.cupcakes

      return(
        <div className="bg-img">
   <div  className="cupcake-card">
     {/* <img className="cupcake-img" src={image} alt={name}/> */}
     <div className="card-info">
             <CssCupcake />

     <br/>

         <h3 className="text">#{name}</h3>
         
         {/* <h3>{flavor}</h3> */}
         {/* add to cupcake profile */}
         <button onClick={() => this.props.history.push(`/cupcakes/${id}`)}>Visit {name}!</button>

           
     </div>
    </div>
    </div>
        
        )
    }
  }
export default CupcakeCard