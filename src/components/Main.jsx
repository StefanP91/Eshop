import { Outlet } from "react-router"

const main = () => {
    return (
        <main className="flex-grow-1 container-fluid bg-main pb-5">
            <Outlet />
        </main>
    )
}

export default main