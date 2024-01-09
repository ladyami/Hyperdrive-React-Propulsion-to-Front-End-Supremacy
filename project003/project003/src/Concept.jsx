import React from 'react'

const Concept = (props) => {
  return (
    <li>
      <img src={props.image} alt='test'/> 
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

export default Concept