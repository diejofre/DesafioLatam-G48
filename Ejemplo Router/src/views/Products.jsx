import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // manejar respuesta exitosa
        setProducts(response.data);
      })
      .catch(function (error) {
        // manejar error
        console.log(error);
      })
      .finally(function () {
        // siempre sera executado
      });
  }, []);

  return (
    <section>
      <h2>Products</h2>
      {products.map((product) => (
        <Product producto={product} key={product.id} />
      ))}
    </section>
  );
};

export default Products;
