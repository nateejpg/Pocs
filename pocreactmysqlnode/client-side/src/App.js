import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

    updateUserName(userData.username);
    updateUserId(userData.id);

  }

  const handleLogout = () => {
  
    window.localStorage.removeItem("idTest");
    window.localStorage.removeItem("userTest");

    setUsername("");
    setUserId("");
  };

  const updateUserId = (id) => {

    window.localStorage.setItem("idTest",id);
  }

  const updateUserName = (user) => {


    window.localStorage.setItem("userTest",user);
  }

  useEffect(() => {

    const idGet = window.localStorage.getItem("idTest");
    const userGet = window.localStorage.getItem("userTest");

    setUsername(userGet)
    setUserId(idGet)

  },[])

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books' element={<Books user={userName} id={userId} onLogout={handleLogout}/>}/>
          <Route path='/add' element={<Add id={userId}/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/login' element={<Login onLogin = {handleLogin}/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
