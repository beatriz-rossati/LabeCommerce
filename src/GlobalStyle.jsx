import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-image: linear-gradient(135deg,#462b6b, #191043 ,#2F194F, #BE83CE, #2F194F);
    }

    main {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        padding: 1%;
        gap: 1%;
        text-align: center;
        min-height: 96vh;
        width: 98%;
        /* background-image: url(".back-ground-image.jpeg");
        background-size: cover; */

    }

    div {
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }

    h1 {
    font-size: 3.2em;
    line-height: 1.1;
    }

    button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #ffffff;
    color: #04164D;
    border:1px solid #BE83CE;
    box-shadow: 2px 2px 5px #BE83CE;
    cursor: pointer;
    transition: border-color 0.25s;
    width: 80%;
    align-self: center;
    }
`;
