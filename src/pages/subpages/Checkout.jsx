import { Container, Stack, FormControl, FormSelect, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useEffect, useState } from "react";
import { useCart } from "../../utilities/CartContext";

const Checkout = () => {

    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([]);
    const { setCartItems } = useCart();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const cartKey = `cart_${user.email}`;
            const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
            setCart(storedCart);
            

            const total = storedCart.reduce((sum, item) => sum + item.discount_price * item.quantity, 0);
            setTotalPrice(total);
        } 
    }, []);


    const productIds = cart.map((item) => item.product_id);
    const productQuantities = cart.map((item) => item.quantity);

    const orderTime = new Date().toISOString().slice(0, 10);


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        try {
            fetch('http://platfromshop.atwebpages.com/order.php', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Order placed successfully!');

                    const user = JSON.parse(localStorage.getItem('user'));
                    
                    if (user) {
                        const cartKey = `cart_${user.email}`;
                        localStorage.removeItem(cartKey);
                        setCartItems(0);
                    }
                    navigate('/');
                } else {
                    alert('Failed to place order.');
                }
            })
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };



    return (
        <>
            <Container>
                <Stack direction="horizontal" gap={1} className='mb-3 mt-2'>
                        <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
                            Homepage
                        </span>
                        <span>
                            {'>'}
                        </span>
                        <span style={{cursor: 'pointer'}} onClick={() => navigate('/cart')}>
                            Cart
                        </span>
                        <span>
                            {'>'}
                        </span>
                        <span>
                            Checkout
                        </span>
                </Stack>

                <Stack className="border border-2 rounded p-5 m-auto w-50">
                    <h2>Billing Details</h2>

                    <Form onSubmit={handleSubmit}>
                        <FormControl type="text" name='full_name' placeholder='Full Name' className='mb-3' required/>
                        <FormControl type='email' name='email' placeholder='Email' className='mb-3' required/>
                        <FormControl type='text' name='phone_number' placeholder='Phone Number' className='mb-3' required/>
                        <FormControl type='text' name='address' placeholder='Address' className='mb-3' required/>
                        <FormControl type='text' name='city' placeholder='City' className='mb-3' required/>
                        {productIds.map((id, index) => (
                            <FormControl key={`product_id_${index}`}  type='hidden' name={`product_ids[${index}]`} value={id} />
                        ))}
                        {productQuantities.map((quantity, index) => (
                            <FormControl key={`product_quantity_${index}`} type='hidden' name={`product_quantities[${index}]`} value={quantity} />
                        ))}
                        <FormControl type='hidden' name='order_time' value={orderTime} />

                        <h5>Total Price: ${totalPrice.toFixed(2)}</h5>

                        <FormSelect name='payment_method' className='mb-3' required>
                            <option defaultValue={''} disabled>Payment Method</option>
                            <option value={'PayPal'}>PayPal</option>
                            <option value={'Cash on Delivery'}>Cash on Delivery</option>
                            <option value={'Credit Card'}>Credit Card</option>
                        </FormSelect>

                        <Button type='submit' variant='danger'>Place Order</Button>
                    </Form>

                </Stack> 


            </Container>
        </>
    )
}

export default Checkout