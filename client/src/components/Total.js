const Total = ({ products }) => {
  const total = products.reduce((accum, { price }) => accum + price, 0)

  return (
    <tbody>
      <tr>
        <td colSpan="3" className="total">Total: ${total}</td>
      </tr>
    </tbody>
  )
}

export default Total;