import { useState } from "react";
import "./App.css";
import Products from "./components/Products/Products";
import { useEffect } from "react";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const getProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getProduct();
  }, [id, name]);

  return (
    <>
      <h1>Mi tienda</h1>
      <h2>{id}</h2>
      <input type="text" onChange={(e) => handleChange(e)} value={id} />

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <Products />
    </>
  );
}

export default App;
