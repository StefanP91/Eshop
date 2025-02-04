import { useEffect, useState, useContext } from 'react';
import { Button, Col, Container, ListGroup, Row, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {  useNavigate } from 'react-router';
import { CartContext } from '../../utilities/CartContext'; 

import '../../index.css'


import Loading from '../../components/Loading';
import ErrorPageFetch from  '../errorPageFetch';



const ProductPage = () => {

    const { addToCart } = useContext(CartContext);
    const { product_id } = useParams(); 
    const [product, setProduct] = useState(null); 
    const [error, setError] = useState(null); 
    const [productQuantity, setProductQuantity] = useState(1);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://webshop.free.nf/all_products_page.php?product_id=${product_id}`); 
                if (!response.ok) {
                    throw new Error('Failed to fetch product'); 
                }
                const data = await response.json();
                setProduct(data); 
            } 
            catch (error) {
                setError(error.message);
                console.error(error)
            }
        };

        fetchProduct();
    }, [product_id]); 

    if (error) {
        return <ErrorPageFetch />; 
    }

    if (!product) {
        return <Loading />; 
    }

    const handleAddToCart = () => {
        const cartItem = { ...product, quantity: productQuantity };
        addToCart(cartItem);
    };

    return (
        <>
            <Container className='mt-5' id='productPage'>

                <Stack direction="horizontal" gap={1} className='mb-3'>
                    <span className='navigation' onClick={() => navigate('/')}>
                        Homepage
                    </span>
                    <span>
                        {'>'}
                    </span>
                    <span className='navigation' onClick={() => navigate(-1)}>
                        {product?.category}
                    </span>
                    <span>
                        {'>'}
                    </span>
                    <span>
                        {product?.title}
                    </span>

                    
                </Stack>

                <Row>
                    <Col lg={6} className='img-container'>
                        <Row className='h-100 g-2'>
                            <Col lg={1}>
                                <Stack gap={2} className='product-images'>
                                    {product?.image_1 && <img src={`data:image/png;base64,${product?.image_1}`} alt="Image 1" onClick={() => {
                                        document.querySelector('.product-image').src = `data:image/png;base64,${product?.image_1}`;
                                    }}/>}
                                    {product?.image_2 && <img src={`data:image/png;base64,${product?.image_2}`} alt="Image 2" onClick={() => {
                                        document.querySelector('.product-image').src = `data:image/png;base64,${product?.image_2}`;
                                    }}/>}
                                    {product?.image_3 && <img src={`data:image/png;base64,${product?.image_3}`} alt="Image 3" onClick={() => {
                                        document.querySelector('.product-image').src = `data:image/png;base64,${product?.image_3}`;
                                    }}/>}
                                    {product?.image_4 && <img src={`data:image/png;base64,${product?.image_4}`} alt="Image 4" onClick={() => {
                                        document.querySelector('.product-image').src = `data:image/png;base64,${product?.image_4}`;
                                    }}/>}
                                    {product?.image_5 && <img src={`data:image/png;base64,${product?.image_5}`} alt="Image 5" onClick={() => {
                                        document.querySelector('.product-image').src = `data:image/png;base64,${product?.image_5}`;
                                    }}/>}
                                    {product?.image_6 && <img src={`data:image/png;base64,${product?.image_6}`} alt="Image 6" onClick={() => {
                                        document.querySelector('.product-image').src = `data:image/png;base64,${product?.image_6}`;
                                    }}/>}
                                    {product?.image_7 && <img src={`data:image/png;base64,${product?.image_7}`} alt="Image 7" onClick={() => {
                                        document.querySelector('.product-image').src = `data:image/png;base64,${product?.image_7}`;
                                    }}/>}
                                    {product?.image_8 && <img src={`data:image/png;base64,${product?.image_8}`} alt="Image 8" onClick={() => {
                                        document.querySelector('.product-image').src = `data:image/png;base64,${product?.image_8}`;
                                    }}/>}
                                </Stack>
                            </Col>
                           
                            <Col lg={11} className='h-100 overflow-hidden'>
                                <img className="product-image h-100 w-100" src={`data:image/png;base64,${product?.image_1}`} alt="Product Image" />
                            </Col>
                        </Row>
                    </Col>


                    <Col lg={6}>
                        <Stack className='border-bottom pb-4' gap={3}>
                            <h1>{product?.title}</h1>

                            <Stack direction='horizontal' gap={3}>
                                <span>
                                    sold: {product?.sold}
                                </span>
                                <span>
                                    |
                                </span>
                                {product.quantity > 0 ? (
                                    <span className='text-success fw-bold'>In Stock: {product.quantity}</span>
                                        ) : (
                                    <span className='text-danger fw-bold'>Not in stock</span>
                                )}
                            </Stack>

                            <Stack direction='horizontal' gap={3}>
                                <span className='fw-bold fs-3'>${product?.discount_price}</span>
                                <span className='text-decoration-line-through text-secondary'>${product?.price}</span>
                            </Stack>
                            <p className='fw-bold'>{product?.description}</p>
                        </Stack>

                        <Stack className='mt-4 mb-4 pb-4 border-bottom'>
                            <Stack direction='horizontal' gap={3}>
                                <ListGroup horizontal>
                                    <Button variant='outline-secondary' onClick={() => setProductQuantity(productQuantity - 1)}>-</Button>
                                    <ListGroup.Item>{productQuantity}</ListGroup.Item>
                                    <Button variant='danger' onClick={() => setProductQuantity(productQuantity + 1)}>+</Button>
                                </ListGroup>

                                {isLoggedIn ? (
                                <Button onClick={handleAddToCart} variant='danger px-5 py-2'>Add to cart</Button>
                                ) : (
                                    <p className='text-danger fw-bolder'>Please login/register to add this product to cart</p>
                                )}                            
                            </Stack>
                        </Stack>

                        <Stack className='mb-4'>
                            <Stack direction='horizontal' gap={3} className='border p-4 bg-white'>
                                <img src="/images/free-delivery.svg" alt="free-delivery" />

                                <Stack>
                                    <h5>Free Delivery</h5>
                                    <p className='fw-bold text-decoration-underline'>Free delivery on all orders over $50</p>
                                </Stack>
                            </Stack>

                            <Stack direction='horizontal' gap={3} className='border p-4 bg-white'>
                                <img src="/images/return-delivery.svg" alt="return-delivery" />

                                <Stack>
                                    <h5>Return Delivery</h5>
                                    <p className='fw-bold text-decoration-underline'>Free 30 Days Delivery Returns</p>
                                </Stack>
                            </Stack>

                            <Stack direction='horizontal' gap={3} className='border p-4 bg-white'>
                                <img src="/images/safe-delivery.svg" alt="safe-delivery" />

                                <Stack>
                                    <h5>Safe Delivery</h5>
                                    <p className='fw-bold text-decoration-underline'>Safe delivery on all orders</p>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default ProductPage;