import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        background: ${(props) => props.theme.dullColors.lightGray};
        width: 100%;
        height: 100%;
        scroll-snap-type: y mandatory;
    }

    #root {
        width: 100%;
        height: 100%;
    }

    a {
        color: unset;
        text-decoration: unset;
    }

    ul {
        list-style-type: none;
    }
`;
