import Homepage from "./Homepage"

const Logout = () => {
    localStorage.removeItem('user');
    return <Homepage />
}

export default Logout