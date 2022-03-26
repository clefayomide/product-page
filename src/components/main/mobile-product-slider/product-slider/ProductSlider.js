import ProductCard from "../product-card/ProductCard";
import products from "../products/product";
import "./productSlider.css";
import AppContext from "../../../../context/AppContext";
import { useContext } from "react";
import Cart from "../cart/Cart";

const ProductSlider = () => {
  const { openMenu } = useContext(AppContext);
  return (
    <>
      <div
        className="product-slider-container"
        style={{ filter: openMenu ? "grayscale(100%)" : "" }}
      >
        {products.map((product) => (
          <ProductCard key={product.name} data={product} />
        ))}
        <Cart />
      </div>
    </>
  );
};

export default ProductSlider;
