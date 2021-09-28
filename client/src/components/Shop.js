import Items from "./Items";

// "button checkout"
// "button checkout disabled"

const Shop = ({products}) => {
    return (
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <Items products={products} />
          <a href="#" className={products.length === 0 ? "button checkout disabled" : "button checkout"}>Checkout</a>
        </div>
      </header>
    );
};

export default Shop;