import React from 'react'
import CssCupcake from './CssCupcake'

class CupcakeCard extends React.Component {
 componentDidMount(){
    let color=document.getElementsByClassName("frosting__item")   
    Array.from(color).map(color=>{
    if(  color.dataset.id==="1"){
      color.style.background="#4D271A"
    } 
    if(  color.dataset.id==="2"){
      color.style.background="#F1E5D5"
    } 
    if(  color.dataset.id==="3"){
      color.style.background="#EB853B"
    } 
    if(  color.dataset.id==="4"){
      color.style.background="#FCED98"
    } 
    if(  color.dataset.id==="5"){
      color.style.background="##F28B82"
    } 
    if(  color.dataset.id==="6"){
      color.style.background="#E7B195"
    } 
    if(  color.dataset.id==="7"){
      color.style.background="#BB1E27"
    } 
    if(  color.dataset.id==="8"){
      color.style.background="#B5C4B1"
    } 
    if(  color.dataset.id==="9"){
      color.style.background="#536279"
    } 
    if(  color.dataset.id==="10"){
      color.style.background="#E9E5C0"
    } 
  

    })    
  }
    
    render() {
        const{name,id}=this.props.cupcake

      return(
        <div className="bg-img">
            <div  className="cupcake-card">
              <div className="card-info">
                <CssCupcake id={id}/>
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