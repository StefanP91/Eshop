import { Container, Stack, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router"
import Services from "../components/Services";

const about = () => {
    const navigate = useNavigate();

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
                        About
                    </span>
                </Stack>

                <section>
                <Row>
                    <Col lg={6}>
                        <Stack gap={3} className=" d-flex justify-content-center h-100">
                            <h1>Our Story</h1>

                            <p>
                                Launched in 2015, Exclusive is South Asia’s premier online 
                                shopping marketplace with an active presence in Bangladesh. 
                                Supported by wide range of tailored marketing, data and service 
                                solutions, Exclusive has 10,500 sellers and 300 brands and serves 
                                3 millions customers across the region. 
                            </p>

                            <p>
                                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a 
                                diverse assortment in categories ranging  from consumer.
                            </p>
                        </Stack>
                    </Col>

                    <Col lg={6}>
                        <img src="images/about-img.svg" alt="about-img" className="img-fluid" />
                    </Col>
                </Row>
                </section>

                <section className="mt-5"> 
                    <Row>
                        <Col lg={3}>
                            <Stack gap={3} className="align-items-center border-1 border p-4 bg-white">
                                <img src="images/about-icon-1.svg" alt="about-icon-1" />
                                <h2>10.5k</h2>
                                <p>Active sellers in our site</p>
                            </Stack>
                        </Col>

                        <Col lg={3}>
                            <Stack gap={3} className="align-items-center border-1 border p-4 bg-danger text-white">
                                <img src="images/about-icon-2.svg" alt="about-icon-2" />
                                <h2>33k</h2>
                                <p>Monthly Product Sale</p>
                            </Stack>
                        </Col>

                        <Col lg={3}>
                            <Stack gap={3} className="align-items-center border-1 border p-4 bg-white">
                                <img src="images/about-icon-3.svg" alt="about-icon-3" />
                                <h2>45.5k</h2>
                                <p>Active customers in our site</p>
                            </Stack>
                        </Col>

                        <Col lg={3}>
                            <Stack gap={3} className="align-items-center border-1 border p-4 bg-white">
                                <img src="images/about-icon-4.svg" alt="about-icon-4" />
                                <h2>25k</h2>
                                <p>Annual gross sale in our site</p>
                            </Stack>
                        </Col>
                    </Row>
                </section>

                <section className="mt-5">
                    <Row>
                        <Col lg={4}>
                            <Stack gap={3} className="bg-white p-4">
                                <img src="images/about-person1.svg" alt="about-person1" style={{height: '430px', backgroundColor: '#F6F6F6'}} />
                                <div>
                                    <h2>John Scott</h2>
                                    <p>Founder & Chairman</p>
                                </div>

                                <Stack gap={2} direction="horizontal">
                                    <img src="images/about-twitter-icon.svg" alt="about-twitter-icon" style={{cursor: 'pointer'}}/>
                                    <img src="images/about-instagram-icon.svg" alt="about-instagram-icon" style={{cursor: 'pointer'}}/>
                                    <img src="images/about-linkedin-icon.svg" alt="about-linkedin-icon" style={{cursor: 'pointer'}}/>
                                </Stack>
                            </Stack>
                        </Col>

                        <Col lg={4}>
                            <Stack gap={3} className="bg-white p-4">
                                <img src="images/about-person2.svg" alt="about-person2" style={{height: '430px', backgroundColor: '#F6F6F6'}}/>
                                <div>
                                    <h2>Joanne Otto</h2>
                                    <p>Managing Director</p>
                                </div>

                                <Stack gap={2} direction="horizontal">
                                    <img src="images/about-twitter-icon.svg" alt="about-twitter-icon" style={{cursor: 'pointer'}}/>
                                    <img src="images/about-instagram-icon.svg" alt="about-instagram-icon" style={{cursor: 'pointer'}}/>
                                    <img src="images/about-linkedin-icon.svg" alt="about-linkedin-icon" style={{cursor: 'pointer'}}/>
                                </Stack>
                            </Stack>
                        </Col>

                        <Col lg={4}>
                            <Stack gap={3} className="bg-white p-4">
                                <img src="images/about-person3.svg" alt="about-person3" style={{height: '430px', backgroundColor: '#F6F6F6'}}/>
                                <div>
                                    <h2>Jeremy Austin</h2>
                                    <p>Founder & Chairman</p>
                                </div>

                                <Stack gap={2} direction="horizontal">
                                    <img src="images/about-twitter-icon.svg" alt="about-twitter-icon" style={{cursor: 'pointer'}}/>
                                    <img src="images/about-instagram-icon.svg" alt="about-instagram-icon" style={{cursor: 'pointer'}}/>
                                    <img src="images/about-linkedin-icon.svg" alt="about-linkedin-icon" style={{cursor: 'pointer'}}/>
                                </Stack>
                            </Stack>
                        </Col>
                    </Row>
                </section>

                <section className="mt-5">
                    <Services />
                </section>
            </Container>

         
        </>
    )
}

export default about