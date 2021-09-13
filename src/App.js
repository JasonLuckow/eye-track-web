import React from 'react';
import Sharingan from './Sharingan.png'
import './App.css';
import './SignIn.css'
import { withAuthenticator, AmplifySignIn, AmplifySignOut, AmplifySignUp, AmplifyAuthenticator, AmplifyAuthContainer } from '@aws-amplify/ui-react'
//import {ThemeProvider, theme, ColorModeProvider, CSSReset} from '@chakra-ui/core'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);


const AuthorizeApp = () => {

    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {

            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    return authState ===AuthState.SignedIn && user ?(

        <div className="App">
            <img src={Sharingan} className="App-logo" alt="logo" />
            <h1>
                Welcome, {user.username}
            </h1>
            <AmplifySignOut
            style={{
                buttontext: '10px 10px'
            }}
            />
        </div>

    ):(
        <AmplifyAuthContainer>
            <div className="SignIn">
                <AmplifyAuthenticator>
                    <AmplifySignUp

                        slot="sign-up"
                        formFields={[
                            {
                                type: "username",
                                placeholder: "Enter Username"
                            },
                            {
                                type: "password",
                                placeholder: "Enter Password"
                            },
                            {
                                type: "email",
                                placeholder: "Enter Email Address"
                            },
                            {
                                type: "phone_number"
                            }
                        ]} />
                        <AmplifySignIn
                            headerText="Sign in to your eye tracking account"
                            slot="sign-in"
                        />
                </AmplifyAuthenticator>
            </div>
        </AmplifyAuthContainer>
    );
}
export default AuthorizeApp;