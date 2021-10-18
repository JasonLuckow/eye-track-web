import React from 'react';
import FormHead from "../Forms/FormHead";
import {makeStyles, CssBaseline, createTheme, ThemeProvider} from '@material-ui/core';
import SideMenu from "../../components/SideMenu";
import Header from "../../components/Header";
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'
import Amplify from "aws-amplify";




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
            default: "#f4f5fd"
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                transform: 'translateZ(0)'
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
        paddingLeft: '320px',
        width: '100%'
    }
})

function Form() {
    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <SideMenu/>
                <div className={classes.appMain}>
                    <Header dark/>
                    <FormHead/>
                    <AmplifySignOut/>
                </div>
                <CssBaseline/>
            </ThemeProvider>
        </>
    );
}

export default Form;