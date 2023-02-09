import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#11111b',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#fff',
        },
        error: {
            main: '#ee342c'
        },
        warning: {
            main: '#ffc200'
        },
    },
});