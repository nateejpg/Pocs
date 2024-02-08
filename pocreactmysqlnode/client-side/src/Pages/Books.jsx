import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("Deleting book with id", id); // Debugging
      await axios.delete("http://localhost:8800/books/" + id);
      console.log("deleted id was: ", id); // Debugging
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Nate's Book Review</h1>
      <div className="books">
        {books.map((books) => (
          <div key={books.id} className="book">
            <li>
              <img className="img" src={books.cover}></img>
              <h2>{books.title}</h2>
              <h2>{books.description}</h2>
              <span>{books.rating}</span>
            </li>
            <button onClick={() => handleDelete(books.id)}>Delete</button>
            <button><Link to={`/update/${books.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <Link to={"/add"}>
        <button>Add Book</button>
      </Link>
      <Link to={"/login"}>
          <button>Login</button>
      </Link>
    </div>
  );
};

export default Books;
