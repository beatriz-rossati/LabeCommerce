import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    main {
        margin: 0;
        padding: 0;
        background: #c1ccc4;
        display: flex;
        flex-direction: row;
        padding: 1%;
        gap: 1%;
        text-align: center;
        min-height: 96vh;
        width: 98%;
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
    background-color: #525984;
    cursor: pointer;
    transition: border-color 0.25s;
    width: 80%;
    align-self: center;
    }
`;
