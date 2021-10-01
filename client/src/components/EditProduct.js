import { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../lib/actions'

const EditProduct = ({ product, showEditForm, setEditForm }) => {
  const { _id, title, quantity, price } = product
  const [priceField, setPriceField] = useState(price)
  const [titleField, setTitleField] = useState(title)
  const [quantityField, setQuantityField] = useState(quantity)

  const dispatch = useDispatch();

  const toggleEditForm = () => {
    setEditForm(!showEditForm);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      _id,
      title: titleField,
      price: priceField,
      quantity: quantityField
    }
    dispatch(actions.updateProduct(updatedProduct))
    toggleEditForm()
  }

  const handleAddToCart = async () => {
    if (quantity > 0) {
      dispatch(actions.addToCart({...product, productId: _id }))
      dispatch(actions.updateProduct({...product, quantity: quantity - 1}))
    }
  }

  const addToCartClass = quantity <= 0 ? 
    'button add-to-cart disabled': 'button add-to-cart'

  if (showEditForm) {
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text"
              id="product-name"
              value={titleField}
              onChange={(e) => setTitleField(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text"
              id="product-price"
              value={priceField}
              onChange={(e) => setPriceField(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text"
              id="product-quantity"
              value={quantityField}
              onChange={(e) => setQuantityField(e.target.value)} />
          </div>

          <div className="actions form-actions">
            <a className="button" onClick={handleSubmit}>Update</a>
            <a className="button" onClick={toggleEditForm}>Cancel</a>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className="actions product-actions">
        <a className={addToCartClass} onClick={handleAddToCart}>Add to Cart</a>
        <a className="button edit" onClick={toggleEditForm}>Edit</a>
      </div>
    )
  }
}

export default EditProduct