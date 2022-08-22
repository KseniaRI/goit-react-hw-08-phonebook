// import { Box } from "components/Box"
// import { useDispatch, useSelector } from "react-redux";
// import { getUserName } from "redux/auth/auth-selectors";
// import { Greetings } from "./UserMenu.styled";
// import { LogoutButton } from "./UserMenu.styled";
// import { logout } from 'redux/auth/auth-operations';

// export const UserMenu = () => {
//     const user = useSelector(getUserName);
//     const dispatch = useDispatch();
//     return (
//         <Box as="div"
//             display="flex"
//             alignItems="center"
//         >
//             <Greetings>Welcome <b>{user}</b></Greetings>
//             <LogoutButton type="button" onClick={() => dispatch(logout())}>Logout</LogoutButton>
//         </Box>
//     )
// }