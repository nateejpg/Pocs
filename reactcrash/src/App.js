import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path = "Home" index element = {<Home/>}/>
         <Route path="about" element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
