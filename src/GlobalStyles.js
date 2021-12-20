import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --black: #000000;
        --red: #E50914;
        --gray: #C4C4C4;
        --grayLight: #E5E5E5;
        --white: #FFFFFF;
        --grayDark: #222222;
    }
    *,
    *::before,
    *::after{
        padding: 0;
        margin: 0;
    }
    html{
        font-size: 62.5%;
        box-sizing: inherit;
        font-family: Roboto;
    }
    body{
        h1{
            font-size: 4.8rem;
            font-weight: 700;
        }
        h3{
            font-weight: 700;
            font-size: 2.4rem;
        }
        h4{
            font-weight: 700;
            font-size: 2.2rem;
        }
        h5{
            font-weight: 700;
            font-size: 1.8rem;
        }
        h6{
            font-size: 1.2rem;
            font-weight: 700;
        }
        p{
            font-size: 1.6rem;
            font-weight: 400;

        }
    }

`;
