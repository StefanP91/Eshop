
import { useState } from "react"
import { Container, Row, Col, Stack, Form, Button, InputGroup } from "react-bootstrap"
import { Link, useNavigate } from "react-router"

const Footer = () => {

    const [message, setMessage] = useState([]);
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 

    const handleSubscribe = async (e) => {
        e.preventDefault(); 

        try {
            const response = await fetch('https://api-eshop.herokuapp.com/subscribe.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message); 
            } else {
                setMessage(data.message || "An unexpected error occurred.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <footer className="bg-black text-white" id="footer">
            <Container>
                <Row className="py-5 g-5">
                    <Col lg={3}>
                        <Stack gap={3}>
                            <h3>Subscribe</h3>
                            <p>Get 10% off your first order</p>

                            <Form onSubmit={handleSubscribe}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <InputGroup>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={email}
                                            placeholder="Enter email"
                                            className="bg-transparent text-white"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <Button variant="outline-secondary" type="submit">
                                            <img src="images/send-icon.svg" alt="send-icon" />
                                        </Button>
                                    </InputGroup>
                                </Form.Group>
                                <p>{message}</p> 
                            </Form>

                            
                        </Stack>
                    </Col>

                    <Col lg={2}>
                        <Stack gap={3}>
                            <h3>Support</h3>
                            <p>58263 Reichel Canyon Apt. 254</p>
                            <p>contact@eshop.com</p>
                            <p>1-341-313-2771</p>
                        </Stack>
                    </Col>

                    <Col lg={2}>
                        <Stack gap={3}>
                            <h3>Account</h3>
                            <p onClick={() => navigate('/login')} style={{cursor: 'pointer'}}>Login</p>
                            <p onClick={() => navigate('/register')} style={{cursor: 'pointer'}}>Register</p>
                            <p onClick={() => navigate('/cart')} style={{cursor: 'pointer'}}>Cart</p>
                        </Stack>
                    </Col>

                    <Col lg={2}>
                        <Stack gap={3}>
                            <h3>Quick Link</h3>
                            <p>Privacy Policy</p>
                            <p>Terms Of Use</p>
                            <p>FAQ</p>
                            <p onClick={() => navigate('/contact')} style={{cursor: 'pointer'}}>Contact</p>
                        </Stack>
                    </Col>

                    <Col lg={2}>
                        <Stack gap={3}>
                            <h3>Social Media</h3>
                            <Stack direction="horizontal" gap={3}>
                                <Link to = "https://www.facebook.com/" target="_blank">
                                    <img src="images/facebook-logo.svg" alt="facebook-logo" />
                                </Link>

                                <Link to = "https://www.twitter.com/" target="_blank">
                                    <img src="images/twitter-logo.svg" alt="twitter-logo" />
                                </Link>

                                <Link to = "https://www.instagram.com/" target="_blank">
                                    <img src="images/instagram-logo.svg" alt="instagram-logo" />
                                </Link>

                                <Link to = "https://www.linkedin.com/" target="_blank">
                                    <img src="images/linkedin-logo.svg" alt="linkedin-logo" />
                                </Link>
                                
                            </Stack>
                        </Stack>
                    </Col>
                </Row>
            </Container>

            <div className="text-center border-top">
                &copy; 2025 E-shop. All rights reserved
            </div>
        </footer>
    )
}


export default Footer