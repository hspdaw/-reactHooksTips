
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </>
    )
}
