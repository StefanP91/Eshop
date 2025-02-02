import React, { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { CartContext } from '../utilities/CartContext';

const CartIcon = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src="/images/shoppingCart.svg" alt="shoppingCart" />
            {cartItems > 0 && (
                <Badge
                    pill
                    bg="danger"
                    style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        padding: '5px 10px',
                        borderRadius: '50%',
                    }}
                >
                    {cartItems}
                </Badge>
            )}
        </div>
    );
};

export default CartIcon;