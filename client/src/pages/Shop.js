import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapiserver.reactbd.com/products"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
         <Products products={products}/>
        </ul>
      )}
    </div>
  );
};

export default Shop;
