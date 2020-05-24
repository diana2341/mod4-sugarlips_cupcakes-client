import React from 'react';



class CupcakeProfile extends React.Component {
    state = {
        cupcakes: ''
    }

    componentDidMount() {
        /** TODO: Make this dynamic! Use the id param of the URL to fetch the correct cat!  */

        // let { allPets } = this.props
        // allPets.find(pet => pet.id === parseInt(this.props.match.params.id) ) // 5 !== '5'

        fetch(`http://localhost:4000/cupcakes/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(cupcakes => this.setState({cupcakes}))
    }
 render(){
        console.log('Profile', this.state.cupcakes)
        console.log(this.state.cupcakes.flavor)
        const{flavor}=this.state.cupcakes
        return (
            
                <div className="pet-page">
                    <h1>my cupcake</h1>
                             <h3>{flavor}</h3>

                    {/* <img className="page-img" src={image ? image : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'} alt={name}/>
                    <div className="page-info">
                        <h2>{name}</h2>
                        <div>How's {name} doing today? {happiness > 0 ? '❤️'.repeat(happiness) : '😿'}</div>
                        <div><b>{name}</b> says {description}</div>
                        <div className={isAdopted ? '' : 'highlight'}>{isAdopted ? 'No Longer up for Adoption' : 'Up for Adoption!'}</div>
                    </div>
                    <div>
                        <span>⬅️</span>
                        <span>➡️</span>
                    </div>
                    <button onClick={() => this.props.history.push('/pets')}>Go Back</button> */}
                  
                </div>
                

        )
    }

   
        // return this.state.pet ? this.renderPet() : <div> No Pet Selected... Try going back to our Pets! </div>
    }


export default CupcakeProfile;