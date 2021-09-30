const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const cart = [...state]
      const newItems = action.payload
      newItems.map(newItem => {
        console.log(cart.length)
        if (cart.length === 0) return cart.push(newItem)

        const foundIdx = cart.findIndex(oldItem => {
          return oldItem.productId === newItem.productId
        })
        if (foundIdx >= 0) {
          cart[foundIdx].quantity += 1
        } else {
          cart.push(newItem)
        }
      })
      console.log(cart)
      return cart
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;