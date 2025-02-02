import { Container, Navbar, Nav, Button, InputGroup, Form, ListGroup } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import '../index.css'
import CartIcon from "./CartIcon";

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [transitioningLink, setTransitioningLink] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLinkClick = (link) => {
        if (activeLink !== link) {
            setTransitioningLink(activeLink);
            setActiveLink(link);
            setTimeout(() => setTransitioningLink(null), 300);
        };
    }

    useEffect(() => {

        const fetchProducts = async () => {
          try {
            const response = await fetch(`http://eshop.local/show_all_products.php`);
            if (!response.ok) {
              throw new Error('Failed to fetch product');
            }
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            setError(error.message);
            console.error(error)
          }
        };
    
        fetchProducts();
    }, []);

    const handleSearch = (e) => {
        const search = e.target.value.toLowerCase(); 
        setSearchQuery(search);
    };

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredProducts([]);
        } else {
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()),
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery, products]);

    const handleProductClick = (productId) => {
        navigate(`/productPage/${productId}`);
        setFilteredProducts([]); 
        setSearchQuery('');
    };

    const handleSearchButtonClick = () => {
        setFilteredProducts([]); 
        setSearchQuery('');
        navigate(`/allProducts?search=${searchQuery}`);
    };

    return (
        <>
            <header>
                <div className="p-3 text-center bg-black text-white">
                    <span>Winter Sale For All Products And Free Express Delivery - Up To 30% Off</span>
                </div>

                <Navbar expand="lg" className="bg-light bg-gradient border-bottom">
                    <Container className="d-flex justify-content-evenly">
                        <NavLink to="/" className={"navbar-brand"}>
                            <img src="/images/logo.png" alt="Brand Logo" className="logo"/>
                        </NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav className="navbar-nav">
                                <NavLink 
                                    to="/"
                                    className={`header-link ${activeLink === '/' ? 'active' : ''} ${transitioningLink === '/home' ? 'transitioning' : ''}`}
                                    onClick={() => handleLinkClick('/')}
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    to="/contact"
                                    className={`header-link ${activeLink === '/contact' ? 'active' : ''} ${transitioningLink === '/contact' ? 'transitioning' : ''}`}
                                    onClick={() => handleLinkClick('/contact')}
                                >
                                    Contact
                                </NavLink>
                                
                                <NavLink
                                    to="/about"
                                    className={`header-link ${activeLink === '/about' ? 'active' : ''} ${transitioningLink === '/about' ? 'transitioning' : ''}`}
                                    onClick={() => handleLinkClick('/about')}
                                >
                                    About
                                </NavLink>

                                {!isLoggedIn && (
                                    <>
                                        <NavLink
                                            to="/register"
                                            className={`header-link ${activeLink === '/register' ? 'active' : ''} ${transitioningLink === '/register' ? 'transitioning' : ''}`}
                                            onClick={() => handleLinkClick('/register')}
                                        >
                                            Register
                                        </NavLink>

                                        <NavLink
                                            to="/login"
                                            className={`header-link ${activeLink === '/login' ? 'active' : ''} ${transitioningLink === '/login' ? 'transitioning' : ''}`}
                                            onClick={() => handleLinkClick('/login')}
                                        >
                                            Login
                                        </NavLink>
                                    </>
                                )}

                                {isLoggedIn && (
                                        <NavLink
                                            to="/logout"
                                            className={`header-link ${activeLink === '/logout' ? 'active' : ''} ${transitioningLink === '/logout' ? 'transitioning' : ''}`}
                                            onClick={() => {
                                                handleLinkClick('/logout');
                                                setIsLoggedIn(false);
                                                localStorage.removeItem('user');
                                            }}
                                        >
                                            Logout
                                        </NavLink>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <InputGroup className="position-relative">
                                <Form.Control type="text" placeholder="Search products here" onChange={handleSearch} value={searchQuery}/>
                                <Button variant="outline-secondary" onClick={handleSearchButtonClick}>Search</Button>
                            </InputGroup>


                            {filteredProducts.length > 0 && (
                                <ListGroup className="mt-3 position-absolute z-3 top-100 overflow-auto custom-scrollbar" style={{ maxHeight: '200px' }}>
                                    {filteredProducts.map(product => (
                                        <ListGroup.Item key={product.id} className="d-flex align-items-center" onClick={() => handleProductClick(product.product_id)} style={{ cursor: 'pointer' }}> 
                                            <img
                                                src={`data:image/png;base64,${product.image_1}`}
                                                alt={product.title}
                                                style={{ width: '50px', height: '50px', marginRight: '10px' }}
                                            />
                                            <div>
                                                <div>{product.title}</div>
                                                <div>${product.discount_price}</div>
                                            </div>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}

                            <NavLink to="/cart" className="nav-link">
                                {isLoggedIn && <CartIcon />}
                            </NavLink>
                        </div>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;
