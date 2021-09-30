import Total from "./Total";

const Items = ({ cart }) => {
  if (cart.length === 0) {
    return (
      <div>
        Your cart is empty
        Total: $0
      </div>
    )
  }

  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(({ productId, title, quantity, price }) => {
          return (
            <tr key={productId + title}>
              <td>{title}</td>
              <td>{quantity}</td>
              <td>{price}</td>
            </tr>
          )
        })}
      </tbody>
      <Total cart={cart} />
    </table>
  )
}

export default Items;
