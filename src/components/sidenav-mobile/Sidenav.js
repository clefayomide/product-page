import "./sidenav.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import cancel from "../../assets/icon-close.svg";

const Sidenav = () => {
  const { openMenu, setOpenMenu } = useContext(AppContext);
  window.onload = () => {
    const menu = document.querySelector(".product-header-nav-menu");
    const nav = document.querySelector(".side-nav-mobile");
    const closeMenu = document.querySelector(".side-nav-mobile-close");
    menu.addEventListener("click", () => {
      nav.classList.add("active");
    });
    closeMenu.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  };
  return (
    <>
      <nav className="side-nav-mobile">
        <img
          src={cancel}
          className="side-nav-mobile-close"
          alt="close menu"
          onClick={() => setOpenMenu(!openMenu)}
        />
        <ul>
          <li className="side-nav-mobile-list">Collections</li>
          <li className="side-nav-mobile-list">Men</li>
          <li className="side-nav-mobile-list">Women</li>
          <li className="side-nav-mobile-list">About</li>
          <li className="side-nav-mobile-list">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Sidenav;
