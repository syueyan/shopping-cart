const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const cart = [...state]
      const newItems = action.payload
      newItems.map(newItem => {
        const found = cart.find(oldItem => oldItem.productId === newItem.productId)
        if (found) {
          found.quantity += 1
        } else {
          cart.push(newItems)
        }
      })
      return cart
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;