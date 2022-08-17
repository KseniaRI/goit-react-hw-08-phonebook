import { AuthNav } from "components/auth-nav/AuthNav"
import { Box } from "components/Box"
import { Navigation } from "components/navigation/Navigation"
import { UserMenu } from "components/user-menu/UserMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/auth-selectors";

export const AppBar = () => {
    const loggedIn = useSelector(getIsLoggedIn);
    
    return (
            <Box as="header"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="4"
                bg="accent"
                mb="5"
            >
                <Navigation />
                {loggedIn ? <UserMenu /> : <AuthNav />}
            </Box>
    )
}