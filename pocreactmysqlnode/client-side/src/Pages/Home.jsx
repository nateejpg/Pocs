import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const Home = () => {

  const [books, setBooks] = useState([]);

useEffect(() => {

  const fetchBooks = async () => {

    try{
    const res = await axios.get("http://localhost:8800/home");
    setBooks(res.data)
    console.log("data successfully fetched",res);

    }catch(err){
      console.log(err);
    }
    
  }

  fetchBooks();

},[])


  return (
    <div>
        <h1>Home part where will be displayed show recommendations, movies in the theater and so forth</h1>
        <div className='books'>
        {books.map((book) => (
          <div key={book.id} className='book'>
            <li>
            {book.title}
            {book.description}
            {book.rating}
            {book.cover}
            </li>
            </div>
        ))}
        </div>
        <Link to={"/login"}><button>Login</button></Link>
    </div>

  )
}

export default Home