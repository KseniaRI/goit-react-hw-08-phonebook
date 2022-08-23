import { Navbar } from "react-bootstrap"
import { FcMultipleSmartphones } from "react-icons/fc"
import { NavLink } from "react-router-dom"

export const Logo = () => {
    return (
        <Navbar.Brand to="/" as={NavLink}>
            <FcMultipleSmartphones size="42"/>
            {' '}
            Phonebook
        </Navbar.Brand >
    )
}