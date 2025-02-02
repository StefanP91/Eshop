import { Container, Stack, Table, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../utilities/CartContext";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const { setCartItems } = useCart();
    console.log(setCartItems);


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const cartKey = `cart_${user.email}`;
            const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
            setCart(storedCart);
            setCartItems(storedCart.length);
        }
    }, [setCartItems]);

    const cartItems = cart.map((item) => {
        const { title, quantity, discount_price, image_1 } = item;
        return { title, quantity, discount_price, image_1 };
    });

    const removeFromCart = (index) => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user) {
            const cartKey = `cart_${user.email}`;
            const newCart = cart.filter((_, i) => i !== index);
            setCart(newCart); 
            setCartItems(newCart.length); 
            localStorage.setItem(cartKey, JSON.stringify(newCart));
        }
    };


    
    return (
        <Container>
            <Stack direction="horizontal" gap={1} className='mb-3 mt-2'>
                    <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
                        Homepage
                    </span>
                    <span>
                        {'>'}
                    </span>
                    <span>
                        Cart
                    </span>
            </Stack>

            <Table striped bordered hover>
                <thead>
                    <th>#</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </thead>

                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index} className="align-middle text-center">
                            <td>{index + 1}</td>
                            <td>
                                <img src={`data:image/webp;base64,${item.image_1}`} alt={item.title} style={{ width: '50px', height: '50px' }} />
                            </td>
                            <td>{item.title}</td>
                            <td>${item.discount_price}</td>
                            <td>{item.quantity}</td>
                            <td>${item.discount_price * item.quantity}</td>
                            <td><Button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Stack gap={1} className="border border-2 rounded p-5 ms-auto w-50">
                <h3>Cart Total</h3>

                <Stack direction="horizontal" className="d-flex justify-content-between border-bottom border-2 py-2 fw-bold">
                    <p>Subtotal:</p>
                    <p>${cart.reduce((total, item) => total + item.discount_price * item.quantity, 0)}</p>
                </Stack>

                <Stack direction="horizontal" className="d-flex justify-content-between border-bottom border-2 py-2 fw-bold">
                    <p>Shipping:</p>
                    <p>Free</p>
                </Stack>

                <Stack direction="horizontal" className="d-flex justify-content-between py-2 fw-bold">
                    <p>Total:</p>
                    <p>${cart.reduce((total, item) => total + item.discount_price * item.quantity, 0)}</p>
                </Stack>

                <Button className="btn btn-danger" onClick={() => navigate('/checkout')}>Proceed to checkout</Button>
            </Stack>
        </Container>
    )
}

export default Cart