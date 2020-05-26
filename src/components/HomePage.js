import React from 'react'
// import Cupcakes from '../cupcake-img'


class HomePage extends React.Component {

  handClick=()=>{
    this.props.history.push('/cupcakes') 
  }

  render() { 
    
    let cp1=require("../cupcake-img/mustache.png")
    let cp2=require("../cupcake-img/bluebuerry.png")
    let cp3=require("../cupcake-img/goth.png")
    // let cp4=require("../cupcake-img/heartstrawberry.png")
    let cp5=require("../cupcake-img/lemon.png")
    let cp6=require("../cupcake-img/xoxo.png")
    let cp7=require("../cupcake-img/sprinkles.png")
    let cp8=require("../cupcake-img/bunnycake.png") //forlogoooo
    let cp9=require("../cupcake-img/strawberrybunny.png")




    return( 
      <div>
          <div className="center-entrance">
             <h1 className="text-c">Some only dream of cupcakes others make it happen</h1>
              <button className="enterbtn" onClick={this.handClick}>enter</button>

          </div>
          
          <div className="stache">
                  <img className="mus" src={cp1} alt="cupcake"/>
        </div> 
               
        <div className="rotate">
                  <img className="mustache" src={cp9} alt="cupcake"/>
        </div>  

        {/* <div className="rotate2">
                  <img className="blueberry" src={cp2} alt="cupcake"/>
        </div>  */}
        <div className="rotate3">
                  <img className="goth" src={cp3} alt="cupcake"/>
        </div> 
        <div className="rotate4">
                  <img className="goth2" src={cp7} alt="cupcake"/>
        </div> 
        <div className="rotate5">
                  <img className="lemon" src={cp5} alt="cupcake"/>
        </div> 
        <div className="rotate6">
                  <img className="sprinlke-front-page" src={cp6} alt="cupcake"/>
        </div> 
        {/* <div className="rotate7">
                  <img className="mustache" src={cp7} alt="cupcake"/>
        </div>    */}

       
        
        
      </div>
    )
  }
}

export default HomePage
