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

export const NavBar = () => {

    const loggedIn = useSelector(getIsLoggedIn);
    const user = useSelector(getUserName);
    const dispatch = useDispatch();
    
  return (
      <StyledNavBar sticky="top">
          <Container>
                <Navbar.Brand to="/" as={NavLink}>
                  <FcMultipleSmartphones size="30"/>
                  {/* <img src="https://cdn-icons.flaticon.com/png/512/2208/premium/2208278.png?token=exp=1661188455~hmac=8f45dd15bca02062dc9a3241837ffa6a"
                      className="d-inline-block"
                      alt="phone"
                      width="30"
                  /> */}
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
                        <Nav.Link to="/" as={NavLink}>Add new contact</Nav.Link>
                        <Nav.Link to="/contacts" as={NavLink}>Your contacts</Nav.Link>
                    </Box>}
                    {loggedIn ? <div>
                                  <Navbar.Text>Welcome <b>{user}</b></Navbar.Text>
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

