import React from 'react'

function Heros(props) {
  return (
    
        <div className='heroDiv'>
        <img src={props.pic} ></img>
        <h2>name:{props.name}</h2>
        <h3>age:{props.age}</h3>
        <h3>role={props.role}</h3>
      </div>
    
  )
}

export default Heros
