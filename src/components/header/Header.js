import "./header.css";
import menu from "../../assets/icon-menu.svg";
import logo from "../../assets/logo.svg";
import shoppingCart from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Header = () => {
  const { openMenu, setOpenMenu, cart, setOpenCart, openCart } =
    useContext(AppContext);
  return (
    <>
      <header
        className="product-header"
        style={{ filter: openMenu ? "grayscale(100%)" : "" }}
      >
        <nav className="product-header-nav">
          <div className="product-header-nav-menu-logo-container">
            <img
              className="product-header-nav-menu nav"
              src={menu}
              alt="menu"
              onClick={() => setOpenMenu(!openMenu)}
            />
            <img
              className="product-header-nav-logo nav"
              src={logo}
              alt="logo"
            />
            <ul className="product-header-nav-desktop-container">
              <li className="product-header-nav-desktop-list">Collections</li>
              <li className="product-header-nav-desktop-list">Men</li>
              <li className="product-header-nav-desktop-list">Women</li>
              <li className="product-header-nav-desktop-list">About</li>
              <li className="product-header-nav-desktop-list">Contact</li>
            </ul>
          </div>
          <div className="product-header-nav-cart-avatar-container">
            <div
              className="product-header-nav-car-length-container"
              onClick={() => setOpenCart(!openCart)}
            >
              <img
                className="product-header-nav-cart nav"
                src={shoppingCart}
                alt="cart"
              />
              <p className="product-header-cart-length">{cart.length}</p>
            </div>
            <img
              className="product-header-nav-avatar nav"
              src={avatar}
              alt="logo"
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
