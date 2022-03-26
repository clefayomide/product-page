import { useState } from "react";
import previous from "../../../../assets/icon-previous.svg";
import next from "../../../../assets/icon-next.svg";
import Quantity from "../quantity/Quantity";
import Button from "../btn/Button";
import { useContext } from "react";
import AppContext from "../../../../context/AppContext";

const ProductCard = ({ data }) => {
  const { quantity } = useContext(AppContext);
  const [imgIndex, setImgIndex] = useState(0);
  const {
    images,
    company,
    name,
    price,
    discount,
    discountPrice,
    text,
    thumbnails,
  } = data;
  const { img } = images[imgIndex];

  const handlePrevious = () => {
    if (imgIndex === 0) {
      setImgIndex(images.length - 1);
    } else {
      setImgIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (imgIndex === images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex((prev) => prev + 1);
    }
  };

  const newItem = {
    id: Math.random(),
    itemImage: images[0],
    itemName: name,
    itemPrice: price,
    itemQuantity: quantity,
  };

  return (
    <div className="product-outer-wrapper">
      <div className="product-wrapper">
        <div className="product-image-container">
          <img src={img} alt="product" className="product-slider-image" />
          <div className="product-slider-previous-next-btn">
            <div
              className="product-slider-previous-btn"
              onClick={handlePrevious}
            >
              <img
                src={previous}
                alt="previous"
                className="product-slider-image-nav"
              />
            </div>
            <div className="product-slider-previous-btn" onClick={handleNext}>
              <img src={next} alt="next" className="product-slider-image-nav" />
            </div>
          </div>
          <div className="product-thumbnail-container">
            {thumbnails.map(({ thumbnail }, index) => (
              <img
                src={thumbnail}
                alt="product thumbnail"
                className="product-thumbnail"
                key={Math.random()}
                onClick={() => setImgIndex(index)}
                style={{
                  border:
                    index === imgIndex ? "2px solid rgb(201, 120, 15)" : "",
                  opacity: index === imgIndex ? "0.4" : "",
                }}
              />
            ))}
          </div>
        </div>
        <div className="product-details-container">
          <h5 className="product-details-company">{company.toUpperCase()}</h5>
          <h1 className="product-details-name">{name}</h1>
          <p className="product-details-text">{text}</p>
          <div className="product-details-price-discount-container">
            <div className="product-details-price-discount">
              <div className="product-details-price">{`$${price}.00`}</div>
              <div className="product-details-discount">{`${discount}%`}</div>
            </div>
            <div className="product-details-discount-amount">{`$${discountPrice}.00`}</div>
          </div>
          <div className="product-quantity-add-to-cart-button">
            <Quantity />
            <Button data={newItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
