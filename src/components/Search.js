import React from 'react'

const Search = props => {

  return (
    <div>
      <label>Search: </label>
      <input
        onChange={null}
        type="text" 
        name="search" 
        placeholder="search by flavor" 
        value={null} />
    </div>
  )
}

export default Search
