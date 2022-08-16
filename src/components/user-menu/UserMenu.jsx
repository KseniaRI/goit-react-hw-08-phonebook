import { Box } from "components/Box"
import { Greetings } from "./UserMenu.styled";
import { LogoutButton } from "./UserMenu.styled";

export const UserMenu = () => {
    return (
        <Box as="div"
            display="flex"
            alignItems="center"
        >
            <Greetings>Welcome</Greetings>
            <LogoutButton type="button">Logout</LogoutButton>
        </Box>
    )
}