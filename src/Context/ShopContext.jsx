import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null); //intially global storage with no data

const getdefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0;
    });
    return cart;
}

const getotalcartamount=(cartItems)=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo=all_product.find((product)=>product.id===Number(item))
            totalAmount += itemInfo.new_price*cartItems[item];
        }
    }
    return totalAmount;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getdefaultCart());

    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
    }

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems(prev => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }));
        }
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem
    }

    const contextValue = { getTotalCartItems,getotalcartamount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
