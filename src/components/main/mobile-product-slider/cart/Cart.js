import "./cart.css";
import AppContext from "../../../../context/AppContext";
import { useContext, useEffect } from "react";
import remove from "../../../../assets/icon-delete.svg";

const Cart = () => {
  const { cart, deleteFromCart, openCart } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      {openCart && (
        <div className="cart-container-wrapper">
          <div className="cart-container">
            <div className="cart-info">
              <h3 className="cart-info-header">Cart</h3>
              <div className="cart-info-items">
                {cart.length < 1 ? (
                  <p className="cart-info-items-empty">Your cart is empty</p>
                ) : (
                  cart.map(
                    ({
                      itemImage: { img },
                      itemPrice,
                      itemName,
                      itemQuantity,
                      id,
                    }) => (
                      <div key={id}>
                        <div className="cart-info-item">
                          <div className="cart-info-items-image-details-container">
                            <img
                              src={img}
                              className="cart-info-item-image"
                              alt="sneakers"
                            />
                            <div className="cart-info-item-details">
                              <p className="cart-info-item-name">
                                {itemName.substring(0, 20)}...
                              </p>
                              <p className="cart-info-item-estimate">
                                ${itemPrice}.00 x {itemQuantity} $
                                <span className="cart-info-item-eval">
                                  {/* eslint-disable-next-line */}
                                  {eval(itemPrice * itemQuantity)}.00
                                </span>
                              </p>
                            </div>
                          </div>
                          <img
                            src={remove}
                            alt="delete"
                            className="cart-info-item-delete-btn"
                            onClick={() => deleteFromCart(id)}
                          />
                        </div>
                      </div>
                    )
                  )
                )}
                {cart.length > 0 && (
                  <button className="cart-info-item-checkout-btn">
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
