import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = ({ user, id}) => {

  const [books, setBooks] = useState([]);
  
  const userId = id;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/books?userId=${userId}`);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("Deleting book with id", id);
      await axios.delete("http://localhost:8800/books/" + id);
      console.log("deleted id was: ", id);
      
      setBooks(prevBooks => books.filter(book => book.id !== id))

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>{user ? `${user}'s Book Shelf` : ""}</h1>
      <h1>{id && `${id}`}</h1>
      <div className="books">
    {!user ? ("") : (books.map((book) => (
          <div key={book.id} className="book">
            <li>
              <img className="img" src={book.cover} alt={book.title}></img>
              <h2>{book.title}</h2>
              <h2>{book.description}</h2>
              <span>{book.rating}</span>
            </li>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <button><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        )))}
      </div>
      {user ? (<Link to={"/add"}>
        <button>Add Book</button>
      </Link>) : ("")}
      {user ? (<Link to={"/"}><button>Log-out</button></Link>) : (<Link to={"/login"}><button>Login</button></Link>)}
    </div>
  );
};

export default Books;
