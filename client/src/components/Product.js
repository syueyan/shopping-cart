import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({ product }) => {
  const [showEditForm, setEditForm] = useState(false)
  const { id, title, quantity, price } = product
  return (
    <div key={id} className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{`${quantity} left in stock`}</p>
        <EditProduct  key={id} 
                      id={id}
                      title={title}
                      quantity={quantity}
                      price={price}
                      showEditForm={showEditForm}
                      setEditForm={setEditForm} />
      </div>
      <a className="delete-button"><span>X</span></a>
    </div>
  )
}

export default Product;