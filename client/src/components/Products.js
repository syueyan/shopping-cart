import Product from "./Product";
import { useSelector } from "react-redux"

const Products = () => {
  const products = useSelector((state) => state.products)

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product key={product.title}
            product={product} />
        )
      })}
    </div>
  );
};

export default Products;