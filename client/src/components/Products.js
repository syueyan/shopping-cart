import React, { useState } from "react";
import Product from "./Product";

const Products = ({ products, onEdit, onDelete, onAddToCart }) => {

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product key={product.title}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete} 
            onAddToCart={onAddToCart}/>
        )
      })}
    </div>
  );
};

export default Products;