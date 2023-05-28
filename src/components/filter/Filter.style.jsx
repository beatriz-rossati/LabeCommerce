import styled from 'styled-components';

export const StyledFilter = styled.div`
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    flex-shrink: 0;
    background-color: #ffffff26;;
    width: 200px;

    h3 {
        background-color: #191043;
        color: #d3d1d1;
        text-shadow: pink 1px 1px 1px;
        border-radius: 10px;
        padding: 10px;
    }

    form {
        margin: 10px 0px;
        width: 100%;
    }

    p{
        margin: 5px;
        color:white;
        font-size: 1.2em;
        text-shadow: 1px 1px black;
    }

    input {
        margin: 5px;
        -webkit-appearance: none;
        width: 80%;
        height: 25px;
        background: #ffffff;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    input:hover {
        opacity: 1;
    }

    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 35px;
        background: #ffc400;
        cursor: pointer;
    }

    input::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #a20983;
        cursor: pointer;
    }
`;
