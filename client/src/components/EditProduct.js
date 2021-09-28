const EditProduct = ({ id, title, quantity, price, showEditForm , setEditForm}) => {
  const toggleEditForm = () => {
    setEditForm(!showEditForm);
  }

  if (showEditForm) {
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value={title} />
          </div>

          <div className="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value={price} />
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={quantity} />
          </div>

          <div class="actions form-actions">
            <a class="button">Update</a>
            <a class="button" onClick={toggleEditForm}>Cancel</a>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div class="actions product-actions">
        <a class="button add-to-cart">Add to Cart</a>
        <a class="button edit" onClick={toggleEditForm}>Edit</a>
      </div>
    )
  }
}

export default EditProduct