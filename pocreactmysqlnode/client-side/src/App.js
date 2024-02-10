import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Books from './Pages/Books';
import Add from "./Pages/Add";
import Update from "./Pages/Update"
import Login from './Pages/Login';
import Register from "./Pages/Register"
import Home from "./Pages/Home"

function App() {

  const [userName, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  const handleLogin = (userData) => {
      
    // Sets up the user from Login Comp to the App, so I can transfer the Data

    setUsername(userData.username);
    setUserId(userData.id)

  }

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books' element={<Books user={userName} id={userId}/>}/>
          <Route path='/add' element={<Add id={userId}/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/login' element={<Login onLogin = {handleLogin}/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
