const Total = ({ cart }) => {
  const total = cart.reduce((accum, { price, quantity }) => accum + (price * quantity), 0)

  return (
    <tbody>
      <tr>
        <td colSpan="3" className="total">Total: ${total}</td>
      </tr>
    </tbody>
  )
}

export default Total;