import React, { useEffect, useState } from "react";
import axios from "axios"
import Shop from "./Shop";
import Products from "./Products";
import data from "../lib/data";
import AddProduct from "./AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showAddForm, setAddForm] = useState(false)
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products")
      console.log(response)
    }
    fetchProducts();
    setProducts(data);
    // setCart(products)
  }, []);

  return (
    <div id="app">
      <Shop products={products} />
      <main>
        <Products products={products} />
        <AddProduct showAddForm={showAddForm} setAddForm={setAddForm} />
      </main>
    </div>
  );
};

export default App;
