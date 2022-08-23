import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { StyledButton, StyledNavBar } from './NavBar.styled';
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { logout } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "redux/auth/auth-selectors";
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Box } from 'components/Box';
import { FcMultipleSmartphones } from 'react-icons/fc';
import { AiOutlineContacts, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { IoIosContact } from 'react-icons/io'

export const NavBar = () => {

    const loggedIn = useSelector(getIsLoggedIn);
    const user = useSelector(getUserName);
    const dispatch = useDispatch();
    
  return (
      <StyledNavBar sticky="top">
          <Container>
                <Navbar.Brand to="/" as={NavLink}>
                  <FcMultipleSmartphones size="42"/>
                {' '}
                  Phonebook
                </Navbar.Brand >
                
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" >
                  <Nav variant="pills" className="justify-content-between flex-grow-1 pe-3" activeKey="/">
                {loggedIn &&      
                    <Box as="div"
                        display="flex"
                    >
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
                    </Box>}
                    {loggedIn ? <div>
                                  <Navbar.Text> 
                                    Welcome
                                    {' '}
                                    <b>
                                      <IoIosContact size="32" />
                                      {' '}
                                      {user}
                                    </b>
                                  </Navbar.Text>
                                  <StyledButton type="button" onClick={() => dispatch(logout())}>Logout</StyledButton>
                                </div>
           
              :
              <Box as="div"
                ml="auto"
              >
                <NavDropdown title="Log in to your account" id="nav-dropdown">
                        <NavDropdown.Item to="/login" as={NavLink}>Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to="/register" as={NavLink}>Register</NavDropdown.Item>
                </NavDropdown>
                </Box>
                      }
            </Nav>        
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
}

