import Items from "./Items";

const Shop = ({ cart, onCheckout }) => {
  const btnClass = cart.length === 0 ?
    "button checkout disabled" :
    "button checkout"

  const handleCheckout = () => {
    if (cart.length) onCheckout()
  }  

  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <Items products={cart} />
        <a className={btnClass} onClick={handleCheckout}>Checkout</a>
      </div>
    </header>
  );
};

export default Shop;