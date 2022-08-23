import styled from "@emotion/styled";


export const StyledHeader = styled.section`
display: flex;
align-items: center;
justify-content: center;
    background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
    url('https://cdn.pixabay.com/photo/2018/10/08/07/39/network-3732122_960_720.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 330px;
    margin-bottom: ${p => p.theme.space[5]}px; 
`;