import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // [] => cuando el componente se monta

  return (
    <div>
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default Products;
