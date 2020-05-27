import React from 'react';


class CupcakeProfile extends React.Component {
    state = {
        cupcake: ''
    }

    componentDidMount() {
        fetch(`http://localhost:4000/cupcakes/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(cupcake => this.setState({cupcake}))
    }

    render(){
        let div=[
            'one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'
        ]
        
        const{id, flavor,name,image,price}=this.state.cupcake

        const {history, loggedInUser, addToCart} = this.props

        return (
            // className="text-cupcake-profile" for italic #poloroid text
            <div>

                <h1 className="cupcake-name">{name}</h1>
                <div className="bg-img-cupcake-profile">
                    {/* sprinkles generator :) */}
                    {div.map(function(name, index){
                        return <div key={ index } className={`sprinkles ${name}`}>
                        </div>;
                      })}
    
                    <div  className="cupcake-card-cupcake-profile">
                        <img className="cupcake-img-cupcake-profile" src={image} alt={name}/>           
                    </div>
                </div>

                <div className="cupcake-info">
                    <h2 className="text-c">My flavor is {flavor}!</h2><br/>
                      
                    <p className="text-c">
                        Cupcake ipsum dolor sit. Amet macaroon fruitcake jujubes gummi bears topping. Croissant toffee fruitcake jelly beans I love.

                        Gummies cake danish apple pie oat cake I love icing carrot cake. I love jelly beans donut macaroon dragée dessert cotton candy cotton candy. Cheesecake I love croissant oat  cake apple pie soufflé I love muffin. Gingerbread I love icing lollipop bonbon.

                        Gingerbread brownie cookie oat cake chocolate bar I love. Halvah chocolate cake caramels chocolate cake muffin cheesecake dessert caramels muffin. Tootsie roll gummi bears pie apple pie brownie chocolate liquorice biscuit. 
                    </p><br/>

                    <h2 id ="buy"className="text-c">${price}</h2>

                    <label className="addcart" >Add to cart</label>
                    <img
                        onClick={ this.props.loggedInUser.username ? 
                            () => {
                            addToCart(id, loggedInUser.id)
                            history.push('/cart')
                            }
                        : () => history.push('/login') }
                        className="cart"  
                        src="https://img.icons8.com/dusk/64/000000/shopping-cart-loaded.png" 
                        alt="cart" 
                    /> 
                </div>            
            </div>
        )
    }
 }

export default CupcakeProfile;