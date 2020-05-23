import React from 'react'
class CupcakeCard extends React.Component {

    
    render() {
        // console.log(this.props)
        const{name,flavor,image}=this.props.cupcakes
      return(
        <div className="bg-img">
   <div  className="cupcake-card">
     <img className="cupcake-img" src={image} alt={name}/>
     <div className="card-info">
     <br/>

         <h3>#{name}</h3>
         
         {/* <h3>{flavor}</h3> */}
         {/* add to cupcake profile */}
           
     </div>
    </div>
    </div>
        
        )
    }
  }
export default CupcakeCard