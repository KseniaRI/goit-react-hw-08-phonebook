import { Box } from "components/Box"
import { Nav } from "react-bootstrap"
import { AiOutlineContacts, AiOutlineUsergroupAdd } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export const NavPages = () => {
    return (
        <Box as="div" display="flex">
            <Nav.Link to="/" as={NavLink}>
                <AiOutlineUsergroupAdd size="26"/>
                {' '}
                Add new contact
            </Nav.Link>
            <Nav.Link to="/contacts" as={NavLink}>
                <AiOutlineContacts size="32"/>
                {' '}
                Your contacts
            </Nav.Link>
        </Box>
    )
}