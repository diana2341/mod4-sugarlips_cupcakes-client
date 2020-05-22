import React from 'react'
class CupcakeCard extends React.Component {

    
    render() {
        // console.log(this.props)
        const{name,flavor,image}=this.props.cupcakes
      return(
          
   <div className="cupcake-card">
     <img className="cupcake-img" src={image} alt={name}/>
     <div className="card-info">
         <h3>{name}</h3>
         <h3>{flavor}</h3>
           
     </div>
    </div>
        
        )
    }
  }
export default CupcakeCard