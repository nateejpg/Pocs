import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1>Home part where will be displayed show recommendations, movies in the theater and so forth</h1>
        <Link to={"/login"}><button>Login</button></Link>
    </div>

  )
}

export default Home