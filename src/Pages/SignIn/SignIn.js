import React from 'react'
import {AmplifySignIn} from "@aws-amplify/ui-react";

export default function SignIn() {
    return(
            <AmplifySignIn
                headerText="Sign in to your eye tracking account"
                slot="sign-in"
            />
    )
}