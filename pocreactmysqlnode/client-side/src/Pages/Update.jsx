import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    rating: null,
    cover: "",
  });

  
  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];
  
  console.log(location);


  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  
  const handleClick = async (e) => {

    e.preventDefault();

    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Form">
      <h1>Update Book</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="rating"
        name="rating"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;
