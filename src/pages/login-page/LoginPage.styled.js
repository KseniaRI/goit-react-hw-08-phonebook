import Button from 'react-bootstrap/Button';
import styled from '@emotion/styled';

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