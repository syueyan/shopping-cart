import React, { useEffect, useState } from "react";
import Shop from "./Shop";
import Products from "./Products";
import data from "../lib/data";

/*
Shop over view component (Shop)
  -item over view component (Item)
    -total (Total)

Products over view component (Products)
  -item description component (Product)
    -add/edit component ??

  -add product component (AddProduct) ???
*/

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div>
      <Shop products={products} />
      <Products products={products} />
    </div>
  );
};

export default App;
