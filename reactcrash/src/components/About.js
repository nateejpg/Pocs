import React from 'react'
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div>
        <h1>
            Congratz, you've managed to learn about Ternary, Flags, Hooks, State, Props and Routes.
        </h1>
        <Link to={"/Home"}>Go back to the Home Page</Link>
    </div>
  )
}

export default About