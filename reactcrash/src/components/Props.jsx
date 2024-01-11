import React from 'react'

export const Props = (props) => {
  return (
    <div>
        <h1>Hello {props.name}, You are {props.age} and you are from {props.city}.</h1>
    </div>
  )
}
