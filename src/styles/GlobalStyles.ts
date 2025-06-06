import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@400;600&family=Poppins:wght@400;700&family=Lato:wght@400;700&family=Oswald:wght@400;700&family=Merriweather:wght@400;700&family=Orbitron:wght@400;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.background};
}

body {
    font-family: ${({ theme }) => theme.font_primary};
}

input[type="date"] {
font-family: ${({ theme }) => theme.font_primary};
}

a {
    text-decoration: none;
}

a, p, h1, h2, h3, h4, h5, h6, span, div, svg, header, main, aside, strong, nav, ul, li, ol, label {
    background-color: transparent;
}

button {
    border: transparent;
    cursor: pointer;
}

li, ul {
    list-style: none;
}

`;
