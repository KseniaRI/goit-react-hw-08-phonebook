import { logout } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from 'redux/auth/auth-selectors';
import { Navbar } from "react-bootstrap";
import PropTypes from 'prop-types';
import { IoIosContact } from "react-icons/io"
import { StyledButton } from "./NavBar.styled"
import { Box } from 'components/Box';

export const UserMenu = () => {
    const user = useSelector(getUserName);
    const dispatch = useDispatch();
    
    return (
        <Box as="div" ml="auto">
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
        </Box>
    )
}

UserMenu.propTypes = {
    user: PropTypes.string.isRequired,
}