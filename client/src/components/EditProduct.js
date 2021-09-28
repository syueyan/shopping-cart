import { useState } from 'react'

const EditProduct = ({ id, title, quantity, price, showEditForm, setEditForm }) => {
  const [priceField, setPriceField] = useState(price)
  const [titleField, setTitleField] = useState(title)
  const [quantityField, setQuantityField] = useState(quantity)

  const toggleEditForm = () => {
    setEditForm(!showEditForm);
  }

  if (showEditForm) {
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input  type="text" 
                    id="product-name" 
                    value={titleField}  
                    onChange={(e) => setTitleField(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input  type="text" 
                    id="product-price" 
                    value={priceField} 
                    onChange={(e) => setPriceField(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input  type="text" 
                    id="product-quantity" 
                    value={quantityField} 
                    onChange={(e) => setQuantityField(e.target.value)}/>
          </div>

          <div className="actions form-actions">
            <a className="button">Update</a>
            <a className="button" onClick={toggleEditForm}>Cancel</a>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div className="actions product-actions">
        <a className="button add-to-cart">Add to Cart</a>
        <a className="button edit" onClick={toggleEditForm}>Edit</a>
      </div>
    )
  }
}

export default EditProduct