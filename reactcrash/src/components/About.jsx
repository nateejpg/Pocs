import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const About = () => {
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://quotesapi-c04u.onrender.com/");
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.length);
        const randomPhrase = data[randomIndex];

        setRandomQuote(randomPhrase);
      } catch (error) {
        console.error("Data couldnt be found", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>
        Congratz, you've managed to learn about Ternary, Flags, Hooks, State,
        Effect, Props and Routes.
      </h1>
      <Link to={"/Home"}>Go back to the Home Page</Link>
      <Link to={"/Crud"}>
        <button>Go to the CRUD</button>
      </Link>
      <h1>Phrase of the day</h1>
      {randomQuote && <h3>{randomQuote.text}</h3>}
      {randomQuote && <p>{randomQuote.author}</p>}
    </div>
  );
};

export default About;
