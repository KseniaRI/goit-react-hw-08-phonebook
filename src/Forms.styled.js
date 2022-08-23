import Button from 'react-bootstrap/Button';
import styled from '@emotion/styled';
import { Form } from 'react-bootstrap';

export const StyledButton = styled(Button)`
    background-color: ${p => p.theme.colors.white};
    border-color: ${p => p.theme.colors.accent};
    border-style: ${p => p.theme.borders.normal};
    color: ${p => p.theme.colors.black};

    &:hover,
    &:focus{
      background-color: ${p => p.theme.colors.accent};
      border-color: ${p => p.theme.colors.accent};
    }
`;

export const StyledForm = styled(Form)`

    width: ${p => p.theme.space[9]}px;
    margin: 0 auto;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.accent};
    opacity: 0.9;
   
`;