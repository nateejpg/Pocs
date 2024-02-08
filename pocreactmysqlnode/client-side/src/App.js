import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Books from './Pages/Books';
import Add from "./Pages/Add";
import Update from "./Pages/Update"
import Login from './Pages/Login';
import Register from "./Pages/Register"

function App() {

  const [username, setUsername] = useState('');

  const handleLogin = (userData) => {
      
    // Sets up the user from Login Comp to the App, so I can transfer the Data

    setUsername(userData)
    console.log("Hello", username)

  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books user = {username}/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/login' element={<Login onLogin = {handleLogin}/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
