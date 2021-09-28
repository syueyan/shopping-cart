import React, { useState } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";

const Products = ({products}) => {
  const [showHideProdForm, setShowHide] = useState(false)

  return (
    <main>
      <div class="product-listing">
        <h2>Products</h2>
        <Product products={products} />
      </div>

{/* everything below is in a 'Add Product' component 
    pass show/hide state & set state func to this form 

    setShowHide(!showHideProdForm)
    
    in this component, show either 'Add Product' button or
    'Add Product form'    
*/}

      <AddProduct products={products}/>
    </main>
  );
};

export default Products;