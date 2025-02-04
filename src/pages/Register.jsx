import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Register = () => {

    const [validated, setValidated] = useState(false);
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } 
        
        else {
            const formData = new FormData(form);
            
            try {
                const response = await fetch('https://webshop.free.nf/register.php', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData(result); 
                if (result.success) {
                    
                    setSuccessMessage(result.message || 'Registration successful.');

                    form.reset(); 
                    setValidated(false); 
                    setEmail(''); 
                    setEmailExists(false);

                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
                } else {
                    const errorMessage = result.error || 'An error occurred. Please try again.';
                    console.log('Error Message:', errorMessage);
                }
            } 
            
            catch (error) {
                console.error('Error:', error);
            }
        }
        
    };

    useEffect(() => {
        if (data.length > 0) {
            const userInfo = data.find((user) => user.email === email);
        }
    }, [data, email]);

    const allData = Array.isArray(data) ? data.map(({ id, email, password, first_name, last_name, message }) => ({
        id, email, password, first_name, last_name, message
    })) : [];

    const emailList = allData.map((email) => email.email);

    useEffect(() => {
        setEmailExists(emailList.includes(email));
    }, [email, emailList]);
    
  
    return (
        <>
          <Container className="mt-5">
            <Row>
              <Col lg={7}>
                <img src="images/register-login-img.svg" alt="register-login-img" className="img-fluid"/>
              </Col>

              <Col lg={5}>
                <Stack gap={3} className="justify-content-center h-100"> 
                    <div>
                        <h1>Create an account</h1>
                        <p>Enter your details below</p>
                    </div>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validation1" className="mb-3">
                                <Form.Control type="text" name="first_name" placeholder="First name" required  />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="12" controlId="validation2" className="mb-3">
                                <Form.Control type="text" name="last_name" placeholder="Last name" required />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide last name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="12" controlId="validation3" className="mb-3">
                                <Form.Control 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    required 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    isInvalid={emailExists || (validated && !email)}
                                    isValid={validated && !emailExists && email}
                                />

                                {validated && !emailExists && email ? (
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                ) : (
                                    <Form.Control.Feedback type="invalid">
                                        {emailExists ? 'Email already exists!' : 'Please provide a valid email!'}
                                    </Form.Control.Feedback>
                                )} 

                            </Form.Group>

                            <Form.Group as={Col} md="12" controlId="validation4">
                                <Form.Control type="password" name="password" placeholder="Password" required />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Password must be at least 8 characters.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Button className="btn btn-danger" type="submit">Register</Button>

                        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}

                        <div className="mt-3">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </Form>
                </Stack>
              </Col>
            </Row>
          </Container>
        </>
    )
}

export default Register