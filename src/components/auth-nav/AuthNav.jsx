import { Box } from "components/Box"
import { StyledNavLink } from "components/navigation/Navigation.styled"

export const AuthNav = () => {
    return (
        <Box as="div"
            display="flex"
        >
            <StyledNavLink to="/login" exact="true">Login</StyledNavLink>
            <StyledNavLink to="/register" exact="true">Register</StyledNavLink>
        </Box>
    )
}