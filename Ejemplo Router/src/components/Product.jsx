import React from "react";

const Product = ({ producto }) => {
  return (
    <section>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt="" />
      <h3>{producto.price}</h3>
    </section>
  );
};

export default Product;
