import React from 'react';
import './App.css';
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import FormHead from "./Pages/Forms/FormHead";
import {makeStyles, CssBaseline, createTheme, ThemeProvider} from '@material-ui/core';
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
import Callibrate from './Pages/Application/Callibrate';
import CSV from './components/CSV';

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

function App(){
    return(
        <ThemeProvider theme={theme}>
        <Callibrate/>
            <div className="App">
                <CSV/>
            </div>
        </ThemeProvider>
    )
}


export default App;