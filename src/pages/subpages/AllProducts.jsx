import { useEffect, useState, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router';
import { Container, Row, Col, Card, Stack } from 'react-bootstrap';

import Loading from '../../components/Loading';
import ErrorPageFetch from  '../errorPageFetch';


const AllProducts = () => {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {

        const fetchProducts = async () => {
          try {
            const response = await fetch(`https://api-eshop.herokuapp.com/all_products_page.php`, {mode: 'cors'});

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

    const filteredProducts = useMemo(() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get('search') || '';

        if (searchQuery === '') {
            return products;
        } else {
            return products.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
    }, [location.search, products]);

    
    if (error) {
    return <ErrorPageFetch />;
    }

    if (products.length === 0) {
    return <Loading />;
    }

    const allData = products.map(({ product_id, title, price, discount_price, sold, category, image_1, quantity, discount_procent}) => (
    {
        id: product_id,
        title,
        price,
        discount_price,
        sold,
        category,
        image_1,
        quantity,
        discount_procent,

    }
    ));

    const Automotive = allData.filter((product) => product.category === 'automotive');
    const Electronics = allData.filter((product) => product.category === 'electronics');
    const HealthandHousehold = allData.filter((product) => product.category === 'health&household');
    const HomeandLifestyle = allData.filter((product) => product.category === 'home&lifestyle');
    const MansFashion = allData.filter((product) => product.category === 'mans_fashion');
    const PetSupplies = allData.filter((product) => product.category === 'pet_supplies');
    const SportsandOutdoor = allData.filter((product) => product.category === 'spots&outdoor');
    const ToysandGames = allData.filter((product) => product.category === 'toys&games');
    const WomansFashion = allData.filter((product) => product.category === 'womans_fashion');

    return (
        <>
            <h1 className='text-center mt-2 text-danger fw-bolder'>All Products</h1>

            <Container>
                <Stack direction="horizontal" gap={1} className='mb-3'>
                    <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
                        Homepage
                    </span>
                    <span>
                        {'>'}
                    </span>
                    <span onClick={() => navigate(-1)}>
                        All Products
                    </span>                    
                </Stack>
            </Container>



            <Container>
                <Row className="g-3">
                    {filteredProducts.map(product => (
                        <Col key={product.id} lg={3}>
                        <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                            <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                            <Card.Body>
                                <Card.Title className='fw-bolder text-center'>
                                    {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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

            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {Automotive.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}

            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {Electronics.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}

            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {HealthandHousehold.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}

            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {HomeandLifestyle.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}
                
            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {MansFashion.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}

            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {PetSupplies.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}

            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {SportsandOutdoor.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}

            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {ToysandGames.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}

            {location.search === '' && (
                <Container>

                <Row className='g-4'>
                    {WomansFashion.map(product => (
                        
                        <Col key={product.id} lg={3}>
                            <Card className='product-card' onClick={() => navigate(`/productPage/${product.product_id}`)}>
                                <Card.Img variant="top" src={`data:image/webp;base64,${product.image_1}`} />
                                <Card.Body>
                                    <Card.Title className='fw-bolder text-center'>
                                        {product.title.length > 25 ? `${product.title.substring(0, 22)}...` : product.title}
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
            )}
        </>
    )
}

export default AllProducts
