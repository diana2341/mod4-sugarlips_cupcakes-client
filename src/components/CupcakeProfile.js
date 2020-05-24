import React from 'react';



class CupcakeProfile extends React.Component {
    state = {
        cupcakes: ''
    }

    componentDidMount() {
 

        fetch(`http://localhost:4000/cupcakes/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(cupcakes => this.setState({cupcakes}))
    }
 render(){
       
        const{flavor,name,image,price}=this.state.cupcakes
        return (
            // className="text-cupcake-profile" for italic #poloroid text
    <div >
         <h1 className="cupcake-name">{name}</h1>
         <div className="bg-img-cupcake-profile">
            <div  className="cupcake-card-cupcake-profile">
            <img className="cupcake-img-cupcake-profile" src={image} alt={name}/>           
            </div>
        </div>

        <div className="cupcake-info">
            <h2 className="text-c">{flavor}</h2>
            <p>
            Cupcake ipsum dolor sit. Amet macaroon fruitcake jujubes gummi bears topping. Croissant toffee fruitcake jelly beans I love.

Gummies cake danish apple pie oat cake I love icing carrot cake. I love jelly beans donut macaroon dragée dessert cotton candy cotton candy. Cheesecake I love croissant oat cake apple pie soufflé I love muffin. Gingerbread I love icing lollipop bonbon.

Gingerbread brownie cookie oat cake chocolate bar I love. Halvah chocolate cake caramels chocolate cake muffin cheesecake dessert caramels muffin. Tootsie roll gummi bears pie apple pie brownie chocolate liquorice biscuit  
            </p> 
        <h3>${price}0</h3>
                      
        </div>
                    
    </div>
                

        )
    }

   
 }


export default CupcakeProfile;