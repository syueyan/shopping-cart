import EditProduct from "./EditProduct";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import actions from '../lib/actions'

const Product = ({ product, onAddToCart }) => {
  const [showEditForm, setEditForm] = useState(false)
  const { _id, title, quantity, price } = product

  const dispatch = useDispatch();

  const onDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`)
      dispatch(actions.deleteProduct(id))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div key={_id} className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{`$${price}`}</p>
        <p className="quantity">{`${quantity} left in stock`}</p>
        <EditProduct product={product} 
                     showEditForm={showEditForm}
                     setEditForm={setEditForm}
                     onAddToCart={onAddToCart}/>
      </div>
      <a className="delete-button" onClick={() => onDelete(_id)}>
        <span>X</span>
      </a>
    </div>
  )
}

export default Product;