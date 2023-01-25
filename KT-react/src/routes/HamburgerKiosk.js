import React from 'react';
import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import HomeScreen from '../hamburger/screens/HomeScreen';

const theme = createTheme({
    typography: {
        h1: { fontWeight: 'bold' },
        h2: {
            fontSize: '2rem',
            color: 'black',
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'white',
        },
    },
    palette: {
        primary: {
            main: '#ff1744'
        },
        secondary: {
            main: '#118e16',
            contrastText: '#ffffff',
        },
    },
});

function HamburgerKiosk() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Paper>
                    <HomeScreen />
                </Paper>
            </Container>
        </ThemeProvider>
    );
}

export default HamburgerKiosk;
