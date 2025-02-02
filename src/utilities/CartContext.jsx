import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const cartKey = `cart_${user.email}`;
            const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
            setCartItems(storedCart.length);
        }
    }, []);

    const addToCart = (product) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const cartKey = `cart_${user.email}`;
            const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
            storedCart.push(product);
            localStorage.setItem(cartKey, JSON.stringify(storedCart));

            setCartItems(storedCart.length);
        }
    };

    const removeFromCart = (index) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const cartKey = `cart_${user.email}`;
            const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
            storedCart.splice(index, 1); 
            localStorage.setItem(cartKey, JSON.stringify(storedCart));

            setCartItems(storedCart.length);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
