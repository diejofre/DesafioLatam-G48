import React from "react";

const Producto = ({ producto, handleDelete }) => {
  return (
    <section>
      <h2>Producto: {producto.nombre}</h2>
      <h3>Precio: {producto.precio}</h3>
      <h4>Descripción: {producto.descripcion}</h4>
      <button onClick={() => handleDelete(producto.id)}>Delete</button>
    </section>
  );
};

export default Producto;
