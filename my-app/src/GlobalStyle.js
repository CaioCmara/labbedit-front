import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex San', sans-serif;  
}

#root{
    max-width: 428px;
    margin: 0 auto;
}
`