import axios from "axios";

const addToCart = (newCartItem) => {
  return async dispatch => {
    const response = await axios.post('/api/cart', { ...newCartItem })
    dispatch({ type: "ADD_TO_CART", payload: [response.data]});
  }
}

const getCart = () => {
  return async dispatch => {
    const response = await axios.get("/api/cart")
    dispatch({ type: "ADD_TO_CART", payload: response.data});
  }
}

const addNewProduct = (newProduct) => {
  return async dispatch => {
    const response = await axios.post("/api/products", { ...newProduct })
    const returnedProduct = response.data;
    dispatch({ type: 'NEW_PRODUCTS', payload: [returnedProduct]})
  }
}

const retrieveProducts = () => {
  return async dispatch => {
    const response = await axios.get("/api/products")
    const returnedProducts = response.data;
    dispatch({ type: 'NEW_PRODUCTS', payload: returnedProducts})
  }
}

const updateProduct = (product) => {
  return async dispatch => {
    const path = `/api/products/${product._id}`
    const res = await axios.put(path, { ...product })
    const updatedProduct = res.data
    dispatch({ type: 'PRODUCT_UPDATE', payload: updatedProduct})
  }
}

const deleteProduct = (id) => {
  return async dispatch => {
    await axios.delete(`/api/products/${id}`)
    dispatch({ type: 'PRODUCT_DELETE', payload: id })
  }
}

const checkoutCart = () => {
  return async dispatch => {
    await axios.post('/api/cart/checkout')
    dispatch({ type: 'CHECKOUT' })
  }
}

const actions = {
  addToCart,
  getCart,
  addNewProduct,
  retrieveProducts,
  updateProduct,
  deleteProduct,
  checkoutCart
}
export default actions
  