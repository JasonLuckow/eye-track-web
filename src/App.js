/*
import React from 'react';
import './App.css';
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import FormHead from "./Pages/Forms/FormHead";
import {makeStyles, CssBaseline, createTheme, ThemeProvider} from '@material-ui/core';
import {withAuthenticator} from '@aws-amplify/ui-react'
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

    const classes = useStyles()
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();



    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {

            setAuthState(nextAuthState);
            setUser(authData);
        });
    }, []);
    return authState ===AuthState.SignedIn && user ?(
        // Uncomment the top to show john work
        // Uncomment bottom to show marty work

        // <>
        // <ThemeProvider theme={theme}>
        //     <SideMenu/>
        //     <div className={classes.appMain}>
        //         <Header/>
        //         <FormHead/>
        //         <AmplifySignOut/>
        //         <FrontCam/>
        //     </div>
        //     <CssBaseline/>
        //     </ThemeProvider>
        // </>

        <>
            <VideoPlayer/>
            <div className="App">
                <AmplifySignOut />
                <FrontCam/>
            </div>
        </>
    ):(
        <AmplifyAuthContainer>
            <div className={"SignInDesign"}>
                <AmplifyAuthenticator>
                    <CreateAccount/>
                    <SignIn/>
                </AmplifyAuthenticator>
            </div>
        </AmplifyAuthContainer>
    );
}

export default withAuthenticator(App)*/
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../src/Pages/Amplify/Login';
import Register from '../src/Pages/Amplify/Register';
import Home from '../src/Pages/Amplify/Home';
import ConfirmRegister from '../src/Pages/Amplify/ConfirmRegister';
import Form from "../src/Pages/Forms/Form";
import './App.css';
import './tailwind.generated.css';
import VideoPlayer from '../src/Pages/Application/VideoPlayer';
import ProtectedRoute from './components/ProtectedRoute';

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
            <Route component={Register} path="/" />
            <Route component={VideoPlayer} path="/test" />
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
