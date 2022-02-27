import {createTheme, Theme} from '@mui/material';

export const themeConfig: Theme = createTheme({
    palette: {
        primary: {
            main: '#1552a8',
        },
        secondary: {
            main: '#1a67D2',
        },
        error: {
            main: '#e54825',
        },
        warning: {
            main: '#ffbe00',
        },
        info: {
            main: '#403d3a',
        },
        success: {
            main: '#588f27',
        },
        text: {
            primary: '#403d3a',
        },
        background: {
            default: '#eeeeee',
        },
    },
});
