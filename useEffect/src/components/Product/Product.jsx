import React from "react";

const Product = ({ product }) => {
  return (
    <section className={"card"}>
      <h2>Title: {product.title}</h2>
      <h3>Price: {product.price}</h3>
      <h4>Descriptin: {product.description}</h4>
    </section>
  );
};

export default Product;
