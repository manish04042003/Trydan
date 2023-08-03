import "./Cart.scss";
import {MdClose} from 'react-icons/md'
import {BsCartX} from 'react-icons/bs'
import CartItem from './CartItem/CartItem'
import { useContext } from "react";
import { Context } from "../../utils/context";

const Cart = ({setshowCart}) => {
    const {cartItems,cartSubtotal} = useContext(Context);
    console.log(cartItems)

    return <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=>setshowCart(false)}>
                    <MdClose/>
                    <span className="text">close</span>
                </span>
            </div>

            {!cartItems?.length && <div className="empty-cart">
                <BsCartX/>
                <span>Np Product in the Cart</span>
                <button className="return-cta">Return To Cart</button>
            </div>}

            {!!cartItems?.length && <>
             <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total"> &#8377; {cartSubtotal} </span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
            </>}
        </div>
    </div>;
};

export default Cart;
