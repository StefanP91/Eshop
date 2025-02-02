import { Container, Stack, Row, Col, Form, Button, Modal } from "react-bootstrap"
import { useState, useRef } from "react";
import { useNavigate } from "react-router";


const Contact = () => {

    const [validated, setValidated] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const formRef = useRef(null);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      }

      else {
        event.preventDefault();
        setShowModal(true);
        setTimeout(() => setShowModal(false), 3000); 

        formRef.current.reset();
        setValidated(false);
        }
    };

    return (


        <>
            <Container>
                <Stack direction="horizontal" gap={1} className='mb-5 mt-3'>
                    <span style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
                        Homepage
                    </span>
                    <span>
                        {'>'}
                    </span>
                    <span>
                        Contact
                    </span>
                </Stack>

                <Row>
                    <Col lg={4}>
                        <Stack className="p-5 border-2 border bg-white">
                            <Stack gap={3} className="border-bottom border-3 pb-4">
                                <Stack direction="horizontal" gap={2}>
                                    <img src="images/contact-phone-icon.svg" alt="contact-phone-icon" />
                                    <h5>Call To Us</h5>
                                </Stack>

                                <p>We are available 24/7, 7 days a week.</p>

                                <p>Phone: 1-341-313-2771</p>
                            </Stack>

                            <Stack gap={3} className="pt-4">
                                <Stack direction="horizontal" gap={2}>
                                    <img src="images/contact-phone-icon.svg" alt="contact-phone-icon" />
                                    <h5>Write To Us</h5>
                                </Stack>

                                <p>Fill out our form and we will contact you within 24 hours.</p>

                                <p>Emails: customer@eshop.com</p>

                                <p>Emails: support@eshop.com</p>
                            </Stack>
                        </Stack>
                    </Col>

                    <Col lg={8}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef} className="h-100 border border-2 p-5 bg-white">
                            <Row className="mb-3">
                                <Form.Group as={Col} lg="4" controlId="validation1">
                                    <Form.Control type="text" placeholder="Your Name*" required/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please provide name.</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} lg="4" controlId="validation2">
                                    <Form.Control type="email" placeholder="Your Email*" required/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} lg="4" controlId="validation3">
                                    <Form.Control type="text" placeholder="Your Phone*" required/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please provide a valid phone number.</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} lg="12" controlId="validation4">
                                <Form.Control as="textarea" placeholder="Your Message" required style={{ height: '250px' }} className="bg-light"/>
                                <Form.Control.Feedback type="invalid">Please write a message.</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <div className="d-flex justify-content-end mt-auto">
                                <Button type="submit" className="btn btn-danger align-self-end">Send Message</Button>
                            </div>
                        </Form>

                        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                            <Modal.Body className="text-center">
                                <h4>Thank You!</h4>
                                <p>Your message has been sent successfully.</p>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        
        </>
    )
}

export default Contact