import React from 'react'


const Search = props => {

  return (
    <div>
      <label>Search: </label>
      <input
        onChange={props.handleSearchName}
        type="text" 
        placeholder="search by flavor" 
        value={props.searchName} />
    </div>
  )
}

export default Search
