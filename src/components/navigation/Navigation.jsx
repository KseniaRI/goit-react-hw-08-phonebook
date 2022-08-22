import { Box } from "components/Box";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
     const loggedIn = useSelector(getIsLoggedIn);
    return (
        <Box as="nav">
            <StyledNavLink to="/" >Home</StyledNavLink>
            {loggedIn && <StyledNavLink to="/contacts" exact="true">Contacts</StyledNavLink>}
        </Box>
    )
}