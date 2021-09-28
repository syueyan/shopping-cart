import React, { useState } from "react";
import Product from "./Product";

const Products = ({products}) => {
  const [showHideProdForm, setShowHide] = useState(false)

  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} />
        )
      })} 
    </div>
  );
};

export default Products;