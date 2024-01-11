import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Crud from "./components/Crud";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="CRUD" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
