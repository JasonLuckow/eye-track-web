import React from 'react';
import {useForm, Form} from "../../components/UseForm";
import Input from "../../controls/Input";
import RadioButton from "../../controls/RadioButton";
import DatePicker from "../../controls/DatePicker";
import {Grid} from "@material-ui/core";
import Button from "../../controls/Button";
import axios from "axios";


const genderList = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'}
]
const handList = [
    {id: 'left', title: 'Right'},
    {id: 'right', title: 'Left'}
]

const glassesList = [
    {id: 'yes', title: 'Yes'},
    {id: 'no', title: 'No'}
]

const initialFValues = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    hand: '',
    glasses: '',
    age: new Date(),
    disorder: ''
}


export default function InitForm() {

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate())
            window.alert('Submitting Form...')
    }

    //todo: replace with actual api
    const postData = () => {
        const url = 'https://eye-tracker.azure-api.net/TestGroup/post'
        axios.post(url, {values}).then((res) => {
            console.log(res);
        })
    }

//}).catch(error => {
//      setError(error);
//    });
    // }, []);

    // if (error) return `Error: ${error.message}`;
//  if (!post) return "No post!"
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                    <Input
                        name="lastName"
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                    />
                    <Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />

                    <Input
                        name="disorder"
                        label="Disorders"
                        value={values.disorder}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RadioButton
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderList}
                    />
                    <RadioButton
                        name="hand"
                        label="Dominant Hand:"
                        value={values.hand}
                        onChange={handleInputChange}
                        items={handList}
                    />

                    <RadioButton
                        name="glasses"
                        label="Do you wear glasses?"
                        value={values.glasses}
                        onChange={handleInputChange}
                        items={glassesList}
                    />
                    <DatePicker
                        name="age"
                        label="Date of Birth"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Button
                            onClick={postData}
                            type="submit"
                            text="Submit"
                        />
                        <Button
                            type="reset"
                            text="Reset"
                            color="default"
                            onClick={resetForm}/>
                    </div>

                </Grid>
            </Grid>
        </Form>
    );

}

