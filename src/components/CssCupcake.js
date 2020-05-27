import React from 'react'

class CssCupcake extends React.Component {

  

  render() { 
    return( 
        <div onMouseOut={this.props.mouseoverOut} onMouseOver={this.props.mouseover}data-id={this.props.id} className ="cupcake">
        <div className="cupcake-body"></div>
        <div className="bottom-shadow"></div>
        
        
        <div className="eye eye-left"></div>
        <div className="eye eye-right"></div>
        <div className="blush blush-l"></div>
        <div className="blush blush-r"></div>
        <div className="mouth"></div>
        
        
       <div className="frosting">
              <div data-id={this.props.id} className="frosting__item"></div>
              <div data-id={this.props.id} className="frosting__item"></div>
              <div data-id={this.props.id} className="frosting__item"></div>
          </div>
        
         <div className="colors">
              <div className="sprinkle sprinkle--blue"></div>
              <div className="sprinkle sprinkle--pink sprinkle--rotate"></div>
              <div className="sprinkle sprinkle--purple"></div>
              <div className="sprinkle sprinkle--blue sprinkle--rotate"></div>
              <div className="sprinkle sprinkle--pink"></div>
              <div className="sprinkle sprinkle--purple sprinkle--rotate"></div>
              <div className="sprinkle sprinkle--blue"></div>
          </div>
      
        
      </div>
    )
  }
}

export default CssCupcake