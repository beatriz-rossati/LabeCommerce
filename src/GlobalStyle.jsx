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
        background: grey;
        display: flex;
        flex-direction: row;
        padding: 1%;
        gap: 1%;
        text-align: center;
        min-height: 650px;
        width: 98%;
    }
    div {
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
`;