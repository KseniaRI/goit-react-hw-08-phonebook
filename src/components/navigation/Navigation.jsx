import { Box } from "components/Box";
import { StyledNavLink } from "./Navigation.styled";

export const Navigation = () => {
    return (
        <Box as="nav">
            <StyledNavLink to="/" exact="true" >Home</StyledNavLink>
            <StyledNavLink to="/contacts" exact="true">Contacts</StyledNavLink>
        </Box>
    )
}