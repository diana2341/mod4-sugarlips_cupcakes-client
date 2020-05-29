import React from 'react'
import CssCupcake from './CssCupcake'


class CupcakeCard extends React.Component {
  state={
    hover:false,
  }
  mouseover=()=>{
    this.setState({hover:true})
   
  }

  mouseoverOut=()=>{
    this.setState({hover:false})
  }
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
      color.style.background="#F28B82"
    } 
    if(  color.dataset.id==="6"){
      color.style.background="#E7B195"
    } 
    if(  color.dataset.id==="7"){
      color.style.background="#BB1E27"
    } 
    if(  color.dataset.id==="8"){
      color.style.background="##B5C4B1"
    } 
    if(  color.dataset.id==="9"){
      color.style.background="#536279"
    } 
    if(  color.dataset.id==="10"){
      color.style.background="#E9E5C0"
    } 
    if(  color.dataset.id==="11"){
      color.style.background="#9D93DC"
    } 
    if(  color.dataset.id==="12"){
      color.style.background="#90ee90"
    }
  

    })    
  }
    
    render() {
      let bubble=require("../cupcake-img/bubble.png")


        const{name,id,flavor}=this.props.cupcake

      return(
        <>
        
    
        <div className="bg-img">
            <div  className="cupcake-card">
              <div className="card-info">

                {this.state.hover?
                  <>
                  <div id="hey">
                <img className="bubble" src={bubble} alt="bubble"/> 
                          
                <p className="bubble-text">{flavor}</p>
                <p className="bubble-text-2">♡My flavor is </p>
                </div>
                </>
                :null
                
                }
                <CssCupcake onclickplay={this.onclickplay} mouseoverOut={this.mouseoverOut} mouseover={this.mouseover} id={id}/>
                <br/>
                <h3 className="text">#{name}</h3>
                <button className="check-me " onClick={() => this.props.history.push(`/cupcakes/${id}`)}>Check me out!</button>
                </div>
              </div>
         </div>
         </>
        
        )
    }
  }
export default CupcakeCard