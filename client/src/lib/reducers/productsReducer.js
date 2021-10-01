const productsReducer = (state = [], action) => {
  const products = [...state]

  switch (action.type) {
    case 'NEW_PRODUCTS': {
      const newProducts = action.payload
      return products.concat(...newProducts)
    }
    case 'PRODUCT_UPDATE': {
      const returnedProduct = action.payload
      return products.map(product => {
        if (product._id === returnedProduct._id) {
          return { ...returnedProduct };
        } else {
          return { ...product };
        }
      });
    }
    case 'PRODUCT_DELETE': {
      const id = action.payload
      return products.filter(product => {
        if (product._id !== id) return true
        return false
      })
    }
    default: {
      return state;
    }
  }
}

export default productsReducer