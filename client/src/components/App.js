import React, { useEffect, useState } from "react";
import axios from "axios"
import Shop from "./Shop";
import Products from "./Products";
import AddProduct from "./AddProduct";
import { useDispatch, useSelector } from "react-redux";
import actions from "../lib/actions";

const App = () => {
  const [showAddForm, setAddForm] = useState(false)
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await axios.get("/api/products")
      dispatch(actions.addNewProducts(response.data))
      response = await axios.get("/api/cart")
      dispatch(actions.addToCart(response.data))
    }
    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = async ({ productId, title, price, quantity }) => {
    const newCartItem = {
      productId,
      title,
      price
    }

    try {
      const response = await axios.post('/api/cart', { ...newCartItem })
      dispatch(actions.addToCart([response.data]))
      const path = `/api/products/${productId}`
      const res = await axios.put(path, { price, title, quantity: quantity - 1 })
      const updatedProduct = res.data
      dispatch(actions.updateProduct(updatedProduct))
    } catch (e) {
      console.log(e)
    }
  }

  const handleCheckout = async () => {
    try {
      await axios.post('/api/cart/checkout')
      dispatch(actions.addToCart([]))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div id="app">
      <Shop cart={cart}
        onCheckout={handleCheckout} />
      <main>
        <Products onAddToCart={handleAddToCart} />
        <AddProduct showAddForm={showAddForm}
          setAddForm={setAddForm} />
      </main>
    </div>
  );
};

export default App;