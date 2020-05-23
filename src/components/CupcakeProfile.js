import React from 'react';



class CupcakeProfile extends React.Component {
    state = {
        pet: this.props.match.params.id
    }

    renderPet () {
        console.log('Profile', this.props)
        return (
            
                <div className="pet-page">
                    <img className="page-img" src={image ? image : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'} alt={name}/>
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
                    <button onClick={() => this.props.history.push('/pets')}>Go Back</button>
                  
                </div>
                

        )
    }

    render(){
        return this.state.pet ? this.renderPet() : <div> No Pet Selected... Try going back to our Pets! </div>
    }
}

export default CupcakeProfile;