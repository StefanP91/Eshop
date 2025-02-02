import { Stack } from "react-bootstrap"
import { useNavigate } from "react-router"

const errorPageFetch = () => {

    const navigate = useNavigate()

    return (
        <>
            <Stack className="d-flex align-items-center justify-content-center h-100" gap={5}>
                <h1 style={{ fontSize: "9rem" }}>404 Not Found</h1>
                <p>Your visited page not found. You may go to homepage</p>
                <button className="btn btn-danger" onClick={() => navigate("/")}>Back to homepage</button>
            </Stack>
        </>
    )
}

export default errorPageFetch