import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Personaje from "./components/Personaje/Personaje";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes/:id" element={<Personaje />} />
      </Routes>
    </>
  );
}

export default App;
