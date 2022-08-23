import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavAuth = () => {
    return (
        <NavDropdown title="Log in to your account" id="nav-dropdown">
            <NavDropdown.Item to="/login" as={NavLink}>Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="/register" as={NavLink}>Register</NavDropdown.Item>
        </NavDropdown>
    )
}

