import Total from "./Total";

// cart is passed in
// cart = [{id, title, price, quantity, productId}]

const Items = ({ products }) => {
  if (products.length === 0) {
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
        {products.map(({ productId, title, quantity, price }) => {
          return (
            <tr key={productId + title}>
              <td>{title}</td>
              <td>{quantity}</td>
              <td>{price}</td>
            </tr>
          )
        })}
      </tbody>
      <Total products={products} />
    </table>
  )
}

export default Items;
