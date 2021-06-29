import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const themes = {
    avengers: {
        bg: "#ceceff",
        color: "#335",
        color_light: "rgba(5, 5, 100, 0.5)"
    },
    terminator: {
        bg: "#ccffcc",
        color: "#010",
        color_light: "rgba(50, 100, 50, 0.5)"
    },
}

export const Theme = (props) => (
    <ThemeProvider theme={themes[props.theme.toLowerCase()]}>
        <GlobalStyle />
        {props.children}
    </ThemeProvider>
);