import React from "react";

const Form = ({ setNombre, setPrecio, setDescripcion, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descripción"
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Form;
