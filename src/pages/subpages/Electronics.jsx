import { useState, useEffect } from 'react'
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router';

import '../../index.css'

import Loading from '../../components/Loading';
import ErrorPageFetch from  '../errorPageFetch';


const Electronics = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://webshop.free.nf/electronics_page.php`); 
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProducts(data); 
            } 
            catch (error) {
                setError(error.message);
                console.error(error)
            }
        };

        fetchProducts();    
    }, []); 

    if (error) {
        return <ErrorPageFetch />; 
    }

    if (products.length === 0) {
        return <Loading />;
    }

    return (
        <div>
            <h1 className='text-center mt-2 text-danger fw-bolder'>Electronics</h1>
            
            <Container className='my-3'>
                <Stack direction="horizontal" gap={1} className='mb-3'>
                    <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
                        Homepage
                    </span>
                    <span>
                        {'>'}
                    </span>
                    <span className='navigation' onClick={() => navigate(-1)}>
                        Electronics
                    </span>
                </Stack>
                
                <Row className='g-4'>
                    {products.map(product => (
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/png;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 26 ? `${product.title.substring(0, 22)}...` : product.title}
                                    </Card.Title>
                                    <Stack direction="horizontal" className='justify-content-between'>
                                        <Stack gap={2}>
                                            <Card.Text className='text-danger fw-bold'>Price: ${product.discount_price}</Card.Text>
                                            <Card.Text className='text-secondary text-decoration-line-through'>Price: ${product.price}</Card.Text>
                                        </Stack>

                                        {product.quantity > 0 ? (
                                            <Card.Text className='text-success fw-bold'>In Stock: {product.quantity}</Card.Text>
                                        ) : (
                                            <Card.Text className='text-danger fw-bold'>Not in stock</Card.Text>
                                        )}
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            
        </div>
    )
}

export default Electronics
