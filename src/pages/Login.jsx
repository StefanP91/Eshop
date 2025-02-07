import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap"
import { useState } from "react"


const about = () => {

    const [validated, setValidated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            const formData = new FormData(form);

            try {
                const response = await fetch('/backend/login.php', {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();

                if (result.success) {
                    setErrorMessage('');
                    setSuccessMessage(result.message || 'Login successful.');
                    form.reset();
                    setValidated(false);

                    localStorage.setItem('user', JSON.stringify(result.user));

                    setTimeout(() => {
                        setSuccessMessage('');
                        window.location.href = '/';
                    }, 1500);
                } 
                
                else {
                    const errorMessage = result.error || 'An error occurred. Please try again.';
                    console.log('Error Message:', errorMessage);
                    setErrorMessage(errorMessage);
                }
            } 
            
            catch (error) {
                console.error('Error:', error);
                setErrorMessage('An unexpected error occurred. Please try again.');
            }
        }
    };

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
                                <h1>Login</h1>
                                <p>Enter your details below</p>
                            </div>

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row>
                                    <Form.Group as={Col} md="12" controlId="validation1" className="mb-3">
                                        <Form.Control type="email" name="email" placeholder="Email" required />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" controlId="validation2" className="mb-3">
                                        <Form.Control type="password" name="password" placeholder="Password" required />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Button type="submit" className="btn btn-danger">Login</Button>

                                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                            </Form>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default about