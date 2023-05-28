import styled from 'styled-components';

export const StyledCart = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    flex-shrink: 0;
    background: #ffffff26;
    width: 250px;


    h3 {
        background-color: #191043;
        color: white;
        text-shadow: pink 1px 1px 1px;
        border-radius: 10px;
        padding: 10px;
    }

    p {
        background-color: white;
        color:#04164D;
        padding: 10px;
        font-size: 20px;
        font-weight: 600;
        border-radius: 10px;
        margin:10px;
        align-self: end;
    }
`;
