const Total = ({products}) => {
  const total = products.reduce((accum, {price}) => accum + price, 0)

  return (
    <tr>
      <td colspan="3" class="total">Total: ${total}</td>
    </tr>
  )
}

export default Total;