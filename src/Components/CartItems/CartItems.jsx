import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getotalcartamount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Call getotalcartamount and pass cartItems as argument
    const subtotal = getotalcartamount(cartItems);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map(product => {
                const quantity = cartItems[product.id];
                if (quantity > 0) {
                    return (
                        <div key={product.id} className="cartitems-format cartitems-format-main">
                            <img src={product.image} alt="" className='carticon-product-icon' />
                            <p>{product.name}</p>
                            <p>${product.new_price}</p>
                            <button className='cartitems-quant'>{quantity}</button>
                            <p>${product.new_price * quantity}</p>
                            <img className='remove-icon'src={remove} onClick={() => removeFromCart(product.id)} alt="" />
                            <hr /> {/* Adding horizontal line after each cart item */}
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        {/* Render subtotal */}
                        <p>${subtotal}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        {/* Render subtotal */}
                        <h3>${subtotal}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promo">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
