import minus from "../../../../assets/icon-minus.svg";
import plus from "../../../../assets/icon-plus.svg";
import AppContext from "../../../../context/AppContext";
import { useContext } from "react";
import './quantity.css'

const Quantity = () => {
  const { quantity, increment, decrement } = useContext(AppContext);
  return (
    <div className="quantity-container">
      <img src={minus} alt="minu" className="quantity-minu" onClick={() => decrement()}/>
      <p>{quantity}</p>
      <img src={plus} alt="plus" className="quantity-plus" onClick={() => increment()}/>
    </div>
  );
};

export default Quantity;
