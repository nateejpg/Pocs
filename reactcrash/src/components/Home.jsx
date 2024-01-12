import React, { useState } from "react";
import { Props } from "./Props";
import { Link } from "react-router-dom";

export const Home = () => {
  // Props
  const userName = "Nathan";
  const userAge = "19";
  const userCity = "Brasília";

  // Use State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pomodorosMade, setPomodorosMade] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [flag, setFlag] = useState(false);

  const loggedInButton = (isLoggedIn) => {
    if (password == "nath26an" && email == "nathan11.abreu@gmail.com") {
      setIsLoggedIn(true);

      alert("You've successfully logged in!");
    } else {
      alert("Check your credentials again.");
    }
  };

  const pomodorosMadeButton = () => {
    setPomodorosMade(pomodorosMade + 1);
  };

  const flagButton = () => {
    // Ternary Operator
    setFlag(!flag);

    console.log(flag);
  };

  // Route Error
  const NoPage = () => {
    return <h1>404</h1>;
  };

  // Form Handler

  const HandleSubmit = () => {
    e.preventDefaut();

    alert(`Hello ${userName}`);
  };

  return (
    <div>
      <h1>Login</h1>
      <Props name={userName} age={userAge} city={userCity} />
      <button onClick={flagButton}>🇨🇦</button>
      <button onClick={pomodorosMadeButton}>🍎</button>
      <h2>You've done {pomodorosMade} pomodoros!</h2>
      <h3>The current state of the flag is {flag ? "🔴" : "🟢"}</h3>
      <form onSubmit={HandleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Link to={isLoggedIn ? "/About" : ""}>
          <button onClick={loggedInButton}>Enter</button>
        </Link>
      </form>
    </div>
  );
};
