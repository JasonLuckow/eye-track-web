import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';
import {useEffect, useState, setState} from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
                // console.log('here')
                toast.error('Please sign in!');
                setLoggedIn(false);
            }
        })();

    });
    
    return (
        <>
    <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
    />
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
        </>
    );
}
export default ProtectedRoute;