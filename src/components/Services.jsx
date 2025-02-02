import { Stack } from "react-bootstrap"

const Services = () => {
    return (
        <Stack direction="horizontal" className="justify-content-around full-service">
            <Stack gap={3} className="align-items-center">
                <img src="images/fast-delivery.svg" alt="Fast Delivery" />
                <h4>FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $100</p>
            </Stack>

            <Stack gap={3} className="align-items-center">
                <img src="images/customer-support.svg" alt="Fast Delivery" />
                <h4>24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
            </Stack>

            <Stack gap={3} className="align-items-center">
                <img src="images/money-back.svg" alt="Fast Delivery" />
                <h4>MONEY BACK GUARANTEE</h4>
                <p>We return money within 30 days</p>
            </Stack>
        </Stack>
    )
}
export default Services