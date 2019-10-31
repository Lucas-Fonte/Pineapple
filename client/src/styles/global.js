import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,450&display=swap');
    /* @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'); */

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        overflow: auto;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 12px 'Montserrat', sans-serif;
    }

    a{
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
