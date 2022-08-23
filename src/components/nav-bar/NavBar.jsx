import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledNavBar } from './NavBar.styled';
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { NavAuth } from './NavAuth';
import { UserMenu } from './UserMenu';
import { NavPages } from './NavPages';
import { Logo } from './Logo';

export const NavBar = () => {

  const loggedIn = useSelector(getIsLoggedIn);
    
  return (
      <StyledNavBar sticky="top">
          <Container>
            <Logo/>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" >
              <Nav variant="pills" className="justify-content-between flex-grow-1 pe-3" activeKey="/">
                {loggedIn && <NavPages/>}
                {loggedIn ? <UserMenu/> : <NavAuth/>}
              </Nav>        
            </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
}

NavBar.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
}