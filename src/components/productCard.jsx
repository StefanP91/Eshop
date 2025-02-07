import { Card, Stack, Button } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';

import Loading from '../components/Loading';
import ErrorPageFetch from  '../pages/errorPageFetch';

import '../index.css'

const productCard = ({ productId }) => {

 
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

      const fetchProducts = async () => {
        try {
          const response = await fetch(`/backend/show_all_products.php`);
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


    const selectedProduct = allData.find((product) => product.id === productId);
    const { id, title, price, discount_price, sold, category, image_1, quantity, discount_procent } = selectedProduct;


    return (
      <Card onClick={() => navigate(`/productPage/${id}`)} className="best-deals-card">
        <Card.Img variant="top" src={`data:image/jpeg;base64,${image_1}`} className="best-deals-img"/>
        <Card.Text className="best-deals-discount">-{discount_procent}%</Card.Text>
        <Card.Body>
          <Card.Title className='fw-bolder text-center'>
              {title.length > 25 ? `${title.substring(0, 22)}...` : title}
          </Card.Title>

          <Stack direction="horizontal" gap={2} className="d-flex justify-content-between">
              <Stack direction="horizontal" gap={2}>
                <Card.Text className='text-danger fw-bold'>${discount_price}</Card.Text>
                <Card.Text className='text-secondary text-decoration-line-through'>${price}</Card.Text>
              </Stack>

              <Card.Text>Sold: {sold}</Card.Text>
          </Stack>

          {quantity > 0 ? (
              <Card.Text className='text-success fw-bold'>In Stock: {quantity}</Card.Text>
          ) : (
              <Card.Text className='text-danger fw-bold'>Not in stock</Card.Text>
          )}
          <Card.Text className='fst-italic'>Category:{category}</Card.Text>
        </Card.Body>

        
      </Card>

      
    );
  };
  
  export default productCard;