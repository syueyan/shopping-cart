import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({ product }) => {
  const [showEditForm, setEditForm] = useState(false)
  const { id, title, quantity, price } = product
  return (
    <div key={id} class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">{price}</p>
        <p class="quantity">{`${quantity} left in stock`}</p>
        <EditProduct id={id}
          title={title}
          quantity={quantity}
          price={price}
          showEditForm={showEditForm}
          setEditForm={setEditForm} />
      </div>
      <a class="delete-button"><span>X</span></a>
    </div>
  )
}

export default Product;