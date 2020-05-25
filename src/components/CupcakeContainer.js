import React from 'react'
// import cupcakes from "../cupcake_data";
import CupcakeCard from "./CupcakeCard";
import Navbar from './Navbar'
import { Link } from 'react-router-dom';


class CupcakeContainer extends React.Component {

  state = {
    cupcakes: [],
    accountLink: <Link className="text-c" to='/profile'>Account</Link>,
    searchName: '',
    sortBy: ''
  }

  fetchCupCakes=()=>{
    fetch('http://localhost:4000/cupcakes')
    .then(resp=>resp.json())
    .then((data)=>{
      this.setState({cupcakes:data})
    })
  }

  componentDidMount(){
    this.fetchCupCakes()
  }

  renderCupcakes = () => {
    if (this.state.searchName !== '') {
      return this.state.cupcakes.filter(cupcake => cupcake.flavor.toLowerCase().includes(this.state.searchName)).map(cupcake => {
        return <CupcakeCard key={cupcake.id} cupcakes={cupcake} {...this.props}/>
      })
    } else if (this.state.sortBy === 'Name') {
      return this.state.cupcakes.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1).map(cupcake => {
        return <CupcakeCard key={cupcake.id} cupcakes={cupcake} {...this.props}/>
      })
    } else if (this.state.sortBy === 'Price') {
      return this.state.cupcakes.sort((a, b) => a.price > b.price ? 1 : -1).map(cupcake => {
        return <CupcakeCard key={cupcake.id} cupcakes={cupcake} {...this.props}/>
      })
    } else {
      return this.state.cupcakes.map(cupcake => {
        return <CupcakeCard key={cupcake.id} cupcakes={cupcake} {...this.props}/>
      })
    }
  }

  handleSearchName = event => {
    this.setState({
      searchName: event.target.value
    })
  }

  handleSortBy = event => {
    this.setState({
      sortBy: event.target.value
    })
  }

  render() {
      console.log(this.props)
    return( 
      <div>
        <Navbar 
          loggedInUser={this.props.loggedInUser} 
          logoutUser={this.props.logoutUser}
          accountLink={this.state.accountLink}
          search={this.props.search}
          sort={this.props.sort}
          searchName={this.state.searchName}
          sortBy={this.state.sortBy}
          handleSearchName={this.handleSearchName}
          handleSortBy={this.handleSortBy}
        />
      
        <div className="cupcake-container">
          {this.renderCupcakes()}
        </div>
      </div>
    )
  }
}

export default CupcakeContainer
