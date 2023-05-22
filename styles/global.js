const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle({
    body: {
        fontFamily: 'Roboto',
        margin: 0,
        padding: 0
    },
    a: {
        textDecoration: "none",
        color: "inherit"
    }
})