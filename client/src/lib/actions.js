const addToCart = (newItems) => {
  return { type: "ADD_TO_CART", payload: newItems };
}

const addNewProducts = (newProducts) => {
  return { type: 'NEW_PRODUCTS', payload: newProducts}
}

const updateProduct = (updatedProduct) => {
  return { type: 'PRODUCT_UPDATE', payload: updatedProduct}
}

const deleteProduct = (id) => {
  return { type: 'PRODUCT_DELETE', payload: id }
}

const actions = {
  addToCart,
  addNewProducts,
  updateProduct,
  deleteProduct
}
export default actions
  