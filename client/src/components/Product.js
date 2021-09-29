import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({ product, onEdit, onDelete, onAddToCart }) => {
  const [showEditForm, setEditForm] = useState(false)
  const { _id, title, quantity, price } = product

  return (
    <div key={_id} className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{`$${price}`}</p>
        <p className="quantity">{`${quantity} left in stock`}</p>
        <EditProduct key={_id}
          id={_id}
          title={title}
          quantity={quantity}
          price={price}
          showEditForm={showEditForm}
          setEditForm={setEditForm}
          onEdit={onEdit} 
          onAddToCart={onAddToCart}/>
      </div>
      <a className="delete-button" onClick={() => onDelete(_id)}>
        <span>X</span>
      </a>
    </div>
  )
}

export default Product;