import styled from 'styled-components';

export const StyledProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #04164D;
    color:white;
    min-width: 180px;
    max-width: 380px;
    flex-grow: 1;
    height: 400px;
    box-shadow: 2px 2px 5px #0c2777;


    img {
        width: 240px;
        height: 180px;
        border-radius: 10px;
        box-shadow: 1px 1px white;
    }
`;
 

export const StyledPriceTag = styled.p`
    text-align: right;
    padding-right: 4rem;
    width: 100%;
`;

export const StyledName = styled.h2`
    text-align: center;
`;

export const StyledDescription = styled.p`
    text-align: left;
`;
