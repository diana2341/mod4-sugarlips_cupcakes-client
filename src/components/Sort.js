import React from 'react'


const Sort = props => {

  return (
    <div >
      <label style={{ color: 'white' }} className="text-c">Sort By: </label>
      <select className="select-sort" onChange={props.handleSortBy} value={props.sortBy}>
        <option >Select ▼</option>
        <option>Name</option>
        <option>Price</option>
      </select>
    </div>
  )
}

export default Sort
