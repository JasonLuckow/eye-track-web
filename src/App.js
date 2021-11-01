/*
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

export default withAuthenticator(App)*/
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, HashRouter,
} from "react-router-dom";
import Login from '../src/Pages/Amplify/Login';
import Register from '../src/Pages/Amplify/Register';
import Home from '../src/Pages/Amplify/Home';
import ConfirmRegister from '../src/Pages/Amplify/ConfirmRegister';
import Form from "../src/Pages/Forms/Form";
import './App.css';
import './tailwind.generated.css';
import TestPage from './Pages/Application/TestPage';
import ProtectedRoute from './components/ProtectedRoute';
import Callibrate from './Pages/Application/Callibrate'
import FrontCam from '../../components/FrontCam';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route component={Home} path="/home" />
            <Route component={ConfirmRegister} path="/confirm-register" />
            <Route component={Login} path="/log-in" />
            <ProtectedRoute component={Form} exact path="/form"/>
            <ProtectedRoute component={TestPage} exact path="/test-page" />
            <ProtectedRoute component={Callibrate} exact path='/callibrate' />
            <ProtectedRoute component={FrontCam} exact path='/FrontCam' />
            <Route component={Register} path="/" />
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
