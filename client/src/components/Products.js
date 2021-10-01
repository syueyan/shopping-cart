import Product from "./Product";
import { useSelector } from "react-redux"

const Products = ({ onAddToCart }) => {
  const products = useSelector((state) => state.products)

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product key={product.title}
            product={product}
            onAddToCart={onAddToCart}/>
        )
      })}
    </div>
  );
};

export default Products;