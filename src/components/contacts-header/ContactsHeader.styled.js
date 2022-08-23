import styled from "@emotion/styled";

export const StyledContactsHeader = styled.section`
display: flex;
align-items: center;
justify-content: center;
    background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),
    url('https://cdn.pixabay.com/photo/2018/02/23/09/14/finger-3175060_960_720.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 360px;
    margin-bottom: ${p => p.theme.space[5]}px; 
`;