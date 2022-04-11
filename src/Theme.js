import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        lightPurple: "#C4B5F9",
        darkPurple: "8B5CB4",
        lightGreen: "#CAF4ED",
        lightGray: "#E5E5E5",
        darkGray: "#3e4347"
    },
    linearGradient: `linear-gradient(
        90deg,
        #caf4ed -18.14%,
        rgba(196, 181, 249, 0.8) 95.7%
      )`
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;