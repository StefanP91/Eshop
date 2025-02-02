import { Container, Row, Col, Carousel, Stack, Button } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router"
import { useState} from "react"

import '../index.css'

import Countdown from "../components/Countdown"
import ProductCard from "../components/productCard"
import Services from "../components/Services"


const homepage = () => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const navigate = useNavigate()
    
    // FIRST CAROUSEL  
    const items = [
        { productId: "auto_1" },
        { productId: "elec_1" },
        { productId: "hh_1" },
        { productId: "hl_1" },
        { productId: "hh_8" },
        { productId: "elec_3" },
        { productId: "so_8" },
        { productId: "tg_1" },
      ];

      const visibleItems = 4;
      const displayedItems = items
        .slice(activeIndex, activeIndex + visibleItems)
        .concat(
          items.slice(0, Math.max(0, activeIndex + visibleItems - items.length))
        );
  
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      };

      const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      };


    // SECOND CAROUSEL

    const categories = [
        { image: "images/womans-fashion.svg", label: "Woman's Fashion", path: "womansFashion" },
        { image: "images/mans-fashion.svg", label: "Men's Fashion", path: "mansFashion" },
        { image: "images/electronics.svg", label: "Electronics", path: "electronics" },
        { image: "images/home-lifestyle.svg", label: "Home & Lifestyle", path: "home&lifestyle" },
        { image: "images/automotive.svg", label: "Automotive", path: "automotive" },
        { image: "images/sports-outdoor.svg", label: "Sports & Outdoor", path: "sports&outdoor" },
        { image: "images/toys-games.svg", label: "Toys & Games", path: "toys&games" },
    ];
    const visibleItems2 = 6
    const displayedCategories = categories
        .slice(activeIndex2, activeIndex2 + visibleItems2)
        .concat(
            categories.slice(0, Math.max(0, activeIndex2 + visibleItems2 - categories.length))
        );

    const handlePrev2 = () => {
        setActiveIndex2((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    };

    const handleNext2 = () => {
        setActiveIndex2((prevIndex) => (prevIndex + 1) % categories.length);
    };

    //BEST SELLING ITEMS

    const bestSellingItems = [
        { productId: "auto_8" },
        { productId: "elec_6" },
        { productId: "hh_2" },
        { productId: "hl_7" },
      ];

    // NEW ARRIVAL
    const newArrival = [
        { productId: "elec_4"},
        { productId: "elec_6"},
        { productId: "elec_7" },
        { productId: "hl_3" },
        { productId: "hl_6" },
        { productId: "auto_4" },
        { productId: "auto_7" },
        { productId: "so_7" },
        { productId: "hh_4" },
        { productId: "hh_1" },
      ];

    
    return (
        <>
            <section className="mt-5">
                <Container>
                    <Row>
                        <Col lg={3} className="border-end d-flex flex-column gap-3">
                            <NavLink to="/womansFashion" className="nav-link hover-element">Woman's Fashion</NavLink>
                            <NavLink to="/mansFashion" className="nav-link hover-element">Men's Fashion</NavLink>
                            <NavLink to="/electronics" className="nav-link hover-element">Electronics</NavLink>
                            <NavLink to="/home&lifestyle" className="nav-link hover-element">Home & Lifestyle</NavLink>
                            <NavLink to="/automotive" className="nav-link hover-element">Automotive</NavLink>
                            <NavLink to="/sports&outdoor" className="nav-link hover-element">Sports & Outdoor</NavLink>
                            <NavLink to="/toys&games" className="nav-link hover-element">Toys & Games</NavLink>
                            <NavLink to="/petsSupplies" className="nav-link hover-element">Pet Supplies</NavLink>
                            <NavLink to="/health&household" className="nav-link hover-element">Health & Household</NavLink>
                        </Col>

                        <Col lg={9}>
                            <Carousel fade={true} indicators={true} controls={false} className="bg-black px-5 py-3 text-white h-100">
                                <Carousel.Item>
                                    <Stack direction="horizontal" gap={3}>
                                        <Stack gap={3} className="d-flex align-items-center justify-content-center">
                                            <Stack direction="horizontal" gap={3}>
                                                <img src="images/apple-icon.svg" alt="apple-icon" />
                                                <p>iPhone 15 Series</p>
                                            </Stack>

                                            <h1>Up to 10% off Vaucher</h1>
                                        </Stack>
                                        
                                        <div className="d-flex align-items-center justify-content-center w-100">
                                            <img src="images/iPhone.svg" alt="iPhone" />
                                        </div>
                                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Stack direction="horizontal" gap={3}>
                                        <Stack gap={3} className="d-flex align-items-center justify-content-center">
                                            <Stack direction="horizontal" gap={3}>
                                                <img src="images/apple-icon.svg" alt="apple-icon" />
                                                <p>iPhone 16 Series</p>
                                            </Stack>

                                            <h1 className="me-auto">Up to 20% off Vaucher</h1>
                                        </Stack>
                                        <div className="d-flex align-items-center justify-content-center w-100">
                                            <img src="images/iPhone-16.png" alt="iPhone" />
                                            </div>
                                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Stack direction="horizontal" gap={3}>
                                        <Stack gap={3} className="d-flex align-items-center justify-content-center">
                                            <Stack direction="horizontal" gap={3}>
                                                <img src="images/apple-icon.svg" alt="apple-icon" />
                                                <p>Apple Watch S9</p>
                                            </Stack>

                                            <h1 className="me-auto">Up to 5% off Vaucher</h1>
                                        </Stack>
                                        <div className="d-flex align-items-center justify-content-center w-100">
                                            <img  src="images/apple-watch.jpg" alt="Apple Watch" />
                                        </div>
                                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Stack direction="horizontal" gap={3}>
                                        <Stack gap={3} className="d-flex align-items-center justify-content-center">
                                            <Stack direction="horizontal" gap={3}>
                                                <img src="images/apple-icon.svg" alt="apple-icon" />
                                                <p>MacBook Pro series</p>
                                            </Stack>

                                            <h1 className="me-auto">Up to 30% off Vaucher</h1>
                                        </Stack>
                                        <div className="d-flex align-items-center justify-content-center w-100">
                                            <img  src="images/macbook.jpg" alt="Apple Watch" />
                                        </div>
                                    </Stack>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Stack direction="horizontal" gap={3}>
                                        <Stack gap={3} className="d-flex align-items-center justify-content-center">
                                            <Stack direction="horizontal" gap={3}>
                                                <img src="images/apple-icon.svg" alt="apple-icon" className="h-100" />
                                                <p>iPhone 15 Series</p>
                                            </Stack>

                                            <h1>Up to 10% off Vaucher</h1>
                                        </Stack>
                                        <div className="d-flex align-items-center justify-content-center w-100 h-100" >
                                            <img className="img-fluid" src="images/iMac.webp" alt="Apple Watch" />
                                        </div>
                                    </Stack>
                                </Carousel.Item>
                            </Carousel>
                                
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mt-5">
                <Container>
                    <p className="fs-3 text-danger border-start border-5 border-danger ps-3">Today's</p>

                    <Stack className="justify-content-between align-items-center mb-3" direction="horizontal" gap={5}>
                        <Stack direction="horizontal" className="align-items-end" gap={3}>
                            <h1>Best Deals</h1>
                            <Countdown />
                        </Stack>

                        <Stack direction="horizontal">
                            <div className="carousel-controls">
                                <button onClick={handlePrev}>
                                    <img src="images/prev-icon.svg" alt="prev-icon" />
                                </button>
                                
                                <button onClick={handleNext}>
                                    <img src="images/next-icon.svg" alt="next-icon" />
                                </button>
                            </div>
                        </Stack>
                    </Stack>

                    <Carousel  indicators={false} controls={false} interval={null}>
                        <Carousel.Item>
                            <Stack direction="horizontal" gap={3}>
                                {displayedItems.map((item, index) => (
                                <ProductCard key={index} productId={item.productId} />
                                ))}
                            </Stack>
                        </Carousel.Item>
                    </Carousel>

                    <div className="d-flex justify-content-center mt-3">
                        <Button className="btn btn-danger px-5" onClick={() => navigate("/allProducts")}>View All Products</Button>
                    </div>

                </Container>
            </section>

            <section className="mt-5">
                <Container>
                    <p className="fs-3 text-danger border-start border-5 border-danger ps-3 mb-4">Categories</p>

                    <Stack direction="horizontal" className="justify-content-between align-items-center mb-3" >
                        <h1>Browse by Category</h1>
                        <Stack direction="horizontal">
                            <div className="carousel-controls">
                                <button onClick={handlePrev2}>
                                    <img src="images/prev-icon.svg" alt="prev-icon" />
                                </button>
                                
                                <button onClick={handleNext2}>
                                    <img src="images/next-icon.svg" alt="next-icon" />
                                </button>
                            </div>
                        </Stack>
                    </Stack>

                    <Carousel  indicators={false} controls={false} interval={null}>
                    <Carousel.Item>
                            <Stack direction="horizontal" gap={3} >
                                {displayedCategories.map((category, index) => (
                                    <Stack className="category-card" key={index} onClick={() => navigate(`/${category.path}`)}>
                                        <img
                                            src={category.image}
                                            alt={category.label}
                                            className="img-fluid"
                                        />
                                        <p>{category.label}</p>
                                    </Stack>
                                ))}
                            </Stack>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>

            <section className="mt-5">
                <Container>
                    <p className="fs-3 text-danger border-start border-5 border-danger ps-3 mb-4">This Month</p>

                    <h1 className="mb-3">Best Selling Products</h1>

                        <Stack direction="horizontal" gap={3}>
                            {bestSellingItems.map((item, index) => (
                            <ProductCard key={index} productId={item.productId} />
                            ))}
                        </Stack>
                </Container>
            </section>

            <section className="mt-5">
                <Container>
                    <div className="music-experience">
                        <Row>
                            <Col lg={6}>
                                <Stack gap={5} className="px-3">
                                    <p>JBL Speaker</p>
                                    <h1>Enhance Your Music Experience</h1>
                                    <span>
                                        Enjoy waterproof, long-lasting battery life indoors, outdoors or in the pool. 
                                        JBL portable Bluetooth speakers are the best way to enjoy your music with your 
                                        favorite people.
                                    </span>
                                </Stack>
                            </Col>

                            <Col lg={6}>
                                <div className="music-experience-img-container">
                                    <img src="images/jbl-speaker.svg" alt="JBL Speaker" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>              
            </section>

            <section className="mt-5">
                <Container>
                    <p className="fs-3 text-danger border-start border-5 border-danger ps-3 mb-4">Featured</p>

                    <h1 className="mb-3">New Arrival</h1>

                    <Row>
                        <Col lg={6}>
                            <Row className="g-3">
                                <Col lg={4}>{<ProductCard key={0} productId={newArrival[0].productId} />}</Col>
                                <Col lg={4}>{<ProductCard key={1} productId={newArrival[1].productId} />}</Col>
                                <Col lg={4}>{<ProductCard key={2} productId={newArrival[2].productId} />}</Col>
                                <Col lg={6}>{<ProductCard key={3} productId={newArrival[3].productId} />}</Col>
                                <Col lg={6}>{<ProductCard key={4} productId={newArrival[4].productId} />}</Col>
                            </Row>
                        </Col>
                        
                        <Col lg={6}>
                            <Row className="g-3">
                                <Col lg={6}>{<ProductCard key={5} productId={newArrival[5].productId} />}</Col>
                                <Col lg={6}>{<ProductCard key={6} productId={newArrival[6].productId} />}</Col>
                                <Col lg={4}>{<ProductCard key={7} productId={newArrival[7].productId} />}</Col>
                                <Col lg={4}>{<ProductCard key={8} productId={newArrival[8].productId} />}</Col>
                                <Col lg={4}>{<ProductCard key={9} productId={newArrival[9].productId} />}</Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="mt-5" >
                <Container>
                    <Services />
                </Container>
            </section>
        
        </>
    )
}

export default homepage