import Items from "./Items";
import axios from "axios";
import actions from '../lib/actions'
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const btnClass = cart.length === 0 ?
    "button checkout disabled" :
    "button checkout"

  const handleCheckout = async () => {
    if (!cart.length) return
    dispatch(actions.checkoutCart())
  }

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <Items cart={cart} />
        <a className={btnClass} onClick={handleCheckout}>Checkout</a>
      </div>
    </header>
  );
};

export default Shop;