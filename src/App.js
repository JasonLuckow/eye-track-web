import React from 'react';
import './App.css';
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import FormHead from "./Pages/Forms/FormHead";
import {makeStyles, CssBaseline, createTheme, ThemeProvider} from '@material-ui/core';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {AmplifySignOut, AmplifyAuthenticator, AmplifyAuthContainer, AmplifyButton} from '@aws-amplify/ui-react'
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import SignIn from "./Pages/SignIn/SignIn";
import "./Pages/SignIn/SignInDesign.css"
import CreateAccount from "./Pages/SignIn/CreateAccount";
import VideoPlayer from "./Pages/Application/VideoPlayer"
import Amplify from "aws-amplify";
import {useEffect} from 'react';
import webgazer from 'webgazer';
import FrontCam from './components/FrontCam';


// Amplify.configure(awsconfig);

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
            disableRipple: true
        }
    }
})

const useStyles = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
})


function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <SideMenu/>
            <div className={classes.appMain}>
                <Header/>
                <FormHead/>
                <AmplifySignOut/>
            setAuthState(nextAuthState);
            setUser(authData);
        });
    }, []);
    return authState ===AuthState.SignedIn && user ?(
        // Uncomment the top to show john work
        // Uncomment bottom to show marty work

         /*<>
         <ThemeProvider theme={theme}>
             <SideMenu/>
             <div className={classes.appMain}>
                 <Header/>
                 <FormHead/>
                 <AmplifySignOut/>
                 <FrontCam/>
             </div>
             <CssBaseline/>
             </ThemeProvider>
         </>*/

        <>
            <VideoPlayer/>
            <div className="App">
                <AmplifySignOut />
                <FrontCam/>
            </div>
            <CssBaseline/>
        </ThemeProvider>
    );
}

export default withAuthenticator(App);