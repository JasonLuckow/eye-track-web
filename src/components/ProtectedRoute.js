import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';
import {useEffect, useState, setState} from 'react';

export function ProtectedRoute({ component: Component, ...rest }){

    const [isAuthenticated, setLoggedIn] = useState(true);
    
    useEffect(() => {
        (async () => {
            let user = null;
    
            try {
                user = await Auth.currentAuthenticatedUser()
                if (user) {
                    setLoggedIn(true);
                } else
                {
                    setLoggedIn(false);
                }
            } catch (e) {
                setLoggedIn(false);
            }
        })();

    });
    
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
}
export default ProtectedRoute;