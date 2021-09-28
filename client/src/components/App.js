import React, { useEffect, useState } from "react";
import axios from "axios"
import Shop from "./Shop";
import Products from "./Products";
import AddProduct from "./AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showAddForm, setAddForm] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products")
      setProducts(response.data);
    }
    fetchProducts();
  }, []);


  const handleNewComment = async (newProduct, callback) => {
    try { 
      const response = await axios.post("/api/products", {...newProduct})
      const addedProduct = response.data;
      setProducts(products.concat(addedProduct))
      if (callback) callback();
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div id="app">
      <Shop products={products} />
      <main>
        <Products products={products} />
        <AddProduct showAddForm={showAddForm} 
                    setAddForm={setAddForm} 
                    onSubmit={handleNewComment} />
      </main>
    </div>
  );
};

export default App;
