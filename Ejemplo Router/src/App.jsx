import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Products from "./views/Products";
import Login from "./views/Login";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<h1>Estas en Home</h1>} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
