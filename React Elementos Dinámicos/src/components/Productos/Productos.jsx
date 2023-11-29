import React, { useState } from "react";
import Producto from "../Producto/Producto";
import Form from "../Form/Form";

const productos = [
  {
    id: 1,
    nombre: "TV",
    precio: 100,
    descripcion: "Es una TV ...",
  },
  {
    id: 2,
    nombre: "Celular",
    precio: 200,
    descripcion: "Un teléfono hecho a ...",
  },
  {
    id: 3,
    nombre: "Aire acondicionado",
    precio: 300,
    descripcion: "Es un aire marca ...",
  },
];

const Productos = () => {
  const [productosState, setProductosState] = useState(productos);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const producto = {
      id: productosState.length + 1,
      nombre,
      precio,
      descripcion,
    };
    setProductosState([...productosState, producto]);
  };

  const handleDelete = (id) => {
    const newProductos = productosState.filter(
      (producto) => producto.id !== id
    );
    setProductosState(newProductos);
  };

  return (
    <>
      <Form
        setNombre={setNombre}
        setPrecio={setPrecio}
        setDescripcion={setDescripcion}
        handleSubmit={handleSubmit}
      />
      {productosState.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default Productos;
