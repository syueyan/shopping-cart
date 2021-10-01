import React, { useEffect, useState } from "react";
import Shop from "./Shop";
import Products from "./Products";
import AddProduct from "./AddProduct";
import { useDispatch } from "react-redux";
import actions from "../lib/actions";

const App = () => {
  const [showAddForm, setAddForm] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(actions.retrieveProducts())
      dispatch(actions.getCart())
    }
    fetchProducts();
  }, [dispatch]);

  return (
    <div id="app">
      <Shop />
      <main>
        <Products />
        <AddProduct showAddForm={showAddForm}
          setAddForm={setAddForm} />
      </main>
    </div>
  );
};

export default App;