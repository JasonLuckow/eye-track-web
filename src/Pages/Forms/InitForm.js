import React, {useState, useEffect} from 'react';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    makeStyles,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
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
    email: '',
    gender: '',
    age: new Date(),
    disorder: ''
}
export default function InitForm() {

    const {
        values,
        setValues,

        handleInputChange
    } = useForm(initialFValues);

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
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="female" control={<Radio/>} label={"Female"}/>
                            <FormControlLabel value="male" control={<Radio/>} label={"Male"}/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    );
}

