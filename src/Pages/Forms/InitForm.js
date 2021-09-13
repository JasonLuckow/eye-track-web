import React, {useState, useEffect} from 'react';
import {Grid, makeStyles, TextField} from "@material-ui/core";
import {useForm, Form} from "../../components/UseForm";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }

    }
}))

const initialFValues = {
    id: 0,
    firstName: ' ',
    lastName: '',
    gender: '',
    age: new Date(),
    disorder: ''
}
export default function InitForm() {
    const classes = useStyles();

    const{
        values,
        setValues,

        handleInputChange
    }=useForm(initialFValues);

    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="First Name"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        name="lastName"
                        value={values.lastName}
                    />
                    <TextField
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={values.email}
                    />
                </Grid>

            </Grid>
        </Form>
    );
}

