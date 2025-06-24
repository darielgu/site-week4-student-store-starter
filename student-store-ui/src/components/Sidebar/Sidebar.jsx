import { Link } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import logo from "../../assets/codepath.svg";
import "./Sidebar.css";

function Sidebar({
  cart,
  isOpen,
  products,
  userInfo,
  setUserInfo,
  toggleSidebar,
  handleOnCheckout,
  isCheckingOut,
  order,
  setOrder,
  error,
  confirmed,
  setConfirmed,
}) {
  return (
    <section className={`Sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="codepath logo" />
          </Link>
        </div>

        <span
          className={`toggle-button button ${isOpen ? "open" : "closed"}`}
          onClick={toggleSidebar}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </span>

        <ShoppingCart
          isOpen={isOpen}
          cart={cart}
          products={products}
          toggleSidebar={toggleSidebar}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          handleOnCheckout={handleOnCheckout}
          isCheckingOut={isCheckingOut}
          error={error}
          order={order}
          setOrder={setOrder}
          confirmed={confirmed}
          setConfirmed={setConfirmed}
        />
      </div>
    </section>
  );
}

export default Sidebar;
