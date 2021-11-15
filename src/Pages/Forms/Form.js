import React from 'react';
import FormHead from "../Forms/FormHead";
import {makeStyles, CssBaseline, createTheme, ThemeProvider} from '@material-ui/core';


const theme = createTheme({
    palette: {
        primary: {
            main: "#333996",
            light: '#3c44b126'
        },
        secondary: {
            main: "#f83245",
            light: '#f8324526'
        },
        background: {
            default: "#DAF7A6 "
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)',
                textAlign: 'left'
            }
        }
    },
    props: {
        MuiIconButton: {
            disableRipple: false
        }
    }
})

const useStyles = makeStyles({
    appMain: {
        display:'flex',
        paddingLeft: '0px',
        width: '100%',
        //textAlign: 'left'

    }
})

function Form() {
    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={classes.appMain}>
                    <FormHead/>
                </div>
                <CssBaseline/>
            </ThemeProvider>
        </>
    );
}

export default Form;