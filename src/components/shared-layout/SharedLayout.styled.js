import styled from "@emotion/styled";
import { Spinner } from "react-bootstrap";

export const StyledSpinner = styled(Spinner)`
position: absolute;
width: ${p => p.theme.space[6]}px;
height: ${p => p.theme.space[6]}px;
color: ${p => p.theme.colors.accent};
top: 50%;
right: 50%;
`;