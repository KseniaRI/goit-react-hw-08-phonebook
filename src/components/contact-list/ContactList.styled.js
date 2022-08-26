import styled from '@emotion/styled';
import { Button, ListGroupItem } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';

export const DeleteButton = styled(Button)`
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.black};
`;

export const ListClipLoader = styled(ClipLoader)`
position: absolute;
color:  ${p => p.theme.colors.background};
top: 70%;
left: 50%;
`;

export const StyledListGroupItem = styled(ListGroupItem)`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;

&:nth-of-type(2n){
  background-color: ${p => p.theme.colors.background};
}
`;

export const ItemWrap = styled.div`
width: calc(100% / 3);
text-align: center;
`