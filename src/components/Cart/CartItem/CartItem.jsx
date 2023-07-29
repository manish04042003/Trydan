import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="Product" />
        </div>
        <div className="prod-details">
          <span className="name">Product Name </span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>4</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="hightlight">&#8377;98</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
