import { useState } from 'react'

const AddProduct = ({ showAddForm, setAddForm, onSubmit }) => {
  const [price, setPrice] = useState("")
  const [title, setTitle] = useState("")
  const [quantity, setQuantity] = useState("")

  const toggleAddForm = () => {
    setAddForm(!showAddForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, price, quantity }, resetInputs)
  }

  const resetInputs = () => {
    setPrice("")
    setTitle("")
    setQuantity("")
    toggleAddForm();
  }

  const formClass = showAddForm ? "add-form visible" : "add-form"

  return (
    <div className={formClass}>
      <p><a className="button add-product-button"
        href="#"
        onClick={toggleAddForm}>
        Add A Product
      </a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text"
            id="product-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text"
            id="product-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)} />
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleSubmit}>Add</a>
          <a className="button" onClick={toggleAddForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProduct;