import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import axios from "axios"
import Shop from "./Shop";
import Products from "./Products";
import AddProduct from "./AddProduct";
import { useDispatch, useSelector } from "react-redux";

const addToCartAction = (newItems) => {
  return { type: "ADD_TO_CART", payload: newItems };
}

const App = () => {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([])
  const [showAddForm, setAddForm] = useState(false)
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await axios.get("/api/products")
      setProducts(response.data);
      response = await axios.get("/api/cart")
      dispatch(addToCartAction(response.data))
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
      const response = await axios.put(path, { ...updatedProduct })
      const returnedProduct = response.data
      console.log(returnedProduct)
      setProducts(products.map(product => {
        if (product._id === returnedProduct._id) {
          return { ...returnedProduct };
        } else {
          return { ...product };
        }
      }))
      if (callback) callback();
    } catch (e) {
      console.error(e)
    }
  }

  const handleDeleteProduct = async (id, callback) => {
    try {
      await axios.delete(`/api/products/${id}`)
      setProducts(products.filter(product => {
        if (product._id !== id) {
          return true
        }
      }))
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
      const response = await axios.post('/api/cart', { ...newCartItem })
      dispatch(addToCartAction([response.data]))
      const path = `/api/products/${productId}`
      const res = await axios.put(path, { price, title, quantity: quantity - 1 })
      const updatedProduct = res.data
      setProducts(products.map(product => {
        if (product._id === updatedProduct._id) {
          return { ...updatedProduct };
        } else {
          return { ...product };
        }
      }))
    } catch (e) {
      console.log(e)
    }
  }

  const handleCheckout = async () => {
    try {
      await axios.post('/api/cart/checkout')
      dispatch(addToCartAction([]))
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
