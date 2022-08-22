import styled from "@emotion/styled";
import { Navbar } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export const StyledNavBar = styled(Navbar)`
background-color: ${p => p.theme.colors.accent};
margin-bottom: ${p => p.theme.space[6]}px;
`;

export const StyledButton = styled(Button)`
margin-left: ${p => p.theme.space[5]}px;
background-color: ${p => p.theme.colors.title};

&:hover,
&:focus{
 background-color: ${p => p.theme.colors.white};
 color: ${p => p.theme.colors.black};
 border-color: ${p => p.theme.colors.white};
}
`;





