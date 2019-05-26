import React from 'react'

const Person = props => {
  return (
    <li>
      <p>Name: {props.name} </p>
      <p>Favorite Color: {props.favoriteColor}</p>
    </li>
  )
}
export default Person
