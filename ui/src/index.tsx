import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import {
    Button,
    createTheme,
    CssBaseline,
    ThemeProvider,
    StyledEngineProvider,
    adaptV4Theme,
} from '@mui/material';
import {Router} from './Router';
import {SnackbarProvider} from 'notistack';

const theme = createTheme(
    adaptV4Theme({
        overrides: {
            MuiSelect: {icon: {position: 'relative'}},
            MuiLink: {
                root: {
                    color: '#CBD691',
                },
            },
            MuiIconButton: {
                root: {
                    color: 'inherit',
                },
            },
            MuiListItemIcon: {
                root: {
                    color: 'inherit',
                },
            },
            MuiToolbar: {
                root: {
                    background: '#9BA777',
                },
            },
            MuiTooltip: {
                tooltip: {
                    fontSize: '1rem',
                },
            },
        },
        palette: {
            background: {
                default: '#181F1C',
                paper: '#2E4231',
            },
            text: {
                primary: '#fbf1d4',
            },
            primary: {
                main: '#9BA777',
            },
            secondary: {
                main: '#CA8676',
            },
            mode: 'dark',
        },
    })
);

const Snackbar: React.FC<React.PropsWithChildren> = ({children}) => {
    const notistackRef = React.createRef<any>();
    const onClickDismiss = (key: unknown) => () => {
        notistackRef.current?.closeSnackbar(key);
    };

    return (
        <SnackbarProvider
            maxSnack={3}
            ref={notistackRef}
            action={(key) => (
                <Button onClick={onClickDismiss(key)} size="small">
                    Dismiss
                </Button>
            )}
        >
            {children}
        </SnackbarProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Snackbar>
                    <CssBaseline />
                    <Router />
                </Snackbar>
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
