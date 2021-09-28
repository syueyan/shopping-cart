import Total from "./Total";

const Items = ({products}) => {
  if (products.length === 0) {
    return (
      <div>
        Your cart is empty
        Total: $0
      </div>
    )
  }

  return (
    <table class="cart-items">
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>

      {products.map(({id, title, quantity, price}) => {
        return (
          <tr key={id}>
            <td>{title}</td>
            <td>{quantity}</td>
            <td>{price}</td>
          </tr>
        )
      })}
      
      <Total products={products} />
    </table>
  )
}

export default Items;
