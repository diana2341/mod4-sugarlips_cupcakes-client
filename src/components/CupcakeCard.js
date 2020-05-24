import React from 'react'
import CssCupcake from './CssCupcake'

class CupcakeCard extends React.Component {

    
    render() {
        const{name,id}=this.props.cupcakes

      return(
        <div className="bg-img">
            <div  className="cupcake-card">
              <div className="card-info">
                <CssCupcake />
                <br/>
                <h3 className="text">#{name}</h3>
                <button onClick={() => this.props.history.push(`/cupcakes/${id}`)}>Visit {name}!</button>
              
                </div>
              </div>
         </div>
        
        )
    }
  }
export default CupcakeCard