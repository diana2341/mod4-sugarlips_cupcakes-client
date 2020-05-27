import React from 'react'


const Search = props => {

  return (
    <div className="formcontainer">
      <label style={{ color: 'white' }} className="text-c">Search: </label>
      <input
      className="search"
        onChange={props.handleSearchName}
        type="text" 
        placeholder="search by flavor" 
        value={props.searchName} />
    </div>
  )
}

export default Search
