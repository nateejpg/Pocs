import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './Pages/Books';
import Add from "./Pages/Add";
import Update from "./Pages/Update"
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update/:id' element={<Update/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
