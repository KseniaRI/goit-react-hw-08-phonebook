import { AuthNav } from "components/auth-nav/AuthNav"
import { Box } from "components/Box"
import { Navigation } from "components/navigation/Navigation"
import { UserMenu } from "components/user-menu/UserMenu";

export const AppBar = () => {
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
                <AuthNav />
                <UserMenu />
            </Box>
    )
}