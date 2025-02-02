import { Stack } from "react-bootstrap"
import { useNavigate } from "react-router"

import Header from "../components/Header"
import Footer from "../components/Footer"

const errorPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <Header />

            <Stack className="d-flex align-items-center justify-content-center" gap={5}>
                <h1 style={{ fontSize: "9rem" }}>404 Not Found</h1>
                <p>Your visited page not found. You may go to homepage</p>
                <button className="btn btn-danger" onClick={() => navigate("/")}>Back to homepage</button>
            </Stack>

            <Footer />
        </>
    )
}

export default errorPage