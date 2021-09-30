import {AmplifySignUp} from '@aws-amplify/ui-react'
import React from "react";

export default function CreateAccount(){

    return(
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
    )

}