import React from 'react'


const Sort = props => {

  return (
    <div>
      <label>Sort By: </label>
      <select onChange={props.handleSortBy} value={props.sortBy}>
        <option>Select</option>
        <option>Name</option>
        <option>Price</option>
      </select>
    </div>
  )
}

export default Sort
