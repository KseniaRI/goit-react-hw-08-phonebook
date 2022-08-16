import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
color: ${p => p.theme.colors.title};
text-decoration: none;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};


&:hover,
&:focus{
  color: ${p => p.theme.colors.white};   
}

&:not(:last-child){
    margin-right: ${p => p.theme.space[5]}px;
}

&.active {
    color: ${p => p.theme.colors.white};
    text-decoration: underline solid ${p => p.theme.colors.white} ${p => p.theme.space[1]}px;
}
`