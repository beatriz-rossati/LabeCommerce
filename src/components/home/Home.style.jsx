import styled from 'styled-components';

export const StyledHome = styled.div`
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    gap: 20px;
    background-color:  #ffffff26;
    width: auto;
    width: 80%;
    min-width: 200px;
    padding: 10px;

    h3{
        justify-self: flex-start;
        text-align: left;
        white-space: nowrap;
    }

    header{
        padding: 10px;
        background-color: #191043;
        color: #d3d1d1;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 20px;
        width: 100%;
    }
`;
