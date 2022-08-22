import styled from "@emotion/styled";

export const Message = styled.p`
text-align: center;
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.title};
margin-bottom: ${p => p.theme.space[5]}px;
`;