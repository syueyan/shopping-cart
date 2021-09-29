import React, { useEffect, useState } from "react";
import axios from "axios"
import Shop from "./Shop";
import Products from "./Products";
import AddProduct from "./AddProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [showAddForm, setAddForm] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await axios.get("/api/products")
      setProducts(response.data);
      response = await axios.get("/api/cart")
      setCart(response.data)
    }
    fetchProducts();
  }, []);


  const handleNewProduct = async (newProduct, callback) => {
    try {
      const response = await axios.post("/api/products", { ...newProduct })
      const returnedProduct = response.data;
      setProducts(products.concat(returnedProduct))
      if (callback) callback();
    } catch (e) {
      console.error(e)
    }
  }

  const handleProductUpdate = async (id, updatedProduct, callback) => {
    try {
      const path = `/api/products/${id}`
      await axios.put(path, { ...updatedProduct })
      const response = await axios.get("/api/products")
      setProducts(response.data)
      if (callback) callback();
    } catch (e) {
      console.error(e)
    }
  }

  const handleDeleteProduct = async (id, callback) => {
    try {
      await axios.delete(`/api/products/${id}`)
      const response = await axios.get(`/api/products`)
      setProducts(response.data)
      if (callback) callback();
    } catch (e) {
      console.error(e)
    }
  }

  const handleAddToCart = async ({ productId, title, price, quantity }) => {
    const newCartItem = {
      productId,
      title,
      price
    }

    try {
      await axios.post('/api/cart', { ...newCartItem })
      let response = await axios.get(`/api/cart`)
      setCart(response.data)

      const path = `/api/products/${productId}`
      await axios.put(path, { price, title, quantity: quantity - 1 })
      response = await axios.get(`/api/products`)
      setProducts(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  const handleCheckout = async () => {
    try {
      await axios.post('/api/cart/checkout')
      const response = await axios.get('/api/cart')
      setCart(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div id="app">
      <Shop cart={cart}
        onCheckout={handleCheckout} />
      <main>
        <Products products={products}
          onEdit={handleProductUpdate}
          onDelete={handleDeleteProduct}
          onAddToCart={handleAddToCart} />
        <AddProduct showAddForm={showAddForm}
          setAddForm={setAddForm}
          onSubmit={handleNewProduct} />
      </main>
    </div>
  );
};

export default App;
