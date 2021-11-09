import React, { useState } from "react";
import { useForm, Form } from "../../components/UseForm";
import Input from "../../controls/Input";
import RadioButton from "../../controls/RadioButton";
import DatePicker from "../../controls/DatePicker";
import { Grid } from "@material-ui/core";
import Button from "../../controls/Button";
import axios from "axios";
import { Auth } from "aws-amplify";
import { useHistory, Link } from "react-router-dom";

require('dotenv').config();

const genderList = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' }
]
const handList = [
    { id: 'left', title: 'Right' },
    { id: 'right', title: 'Left' }
]

const glassesList = [
    { id: 'yes', title: 'Yes' },
    { id: 'no', title: 'No' }
]

const initialFValues = {
    //id: 0,
    FirstName: '',
    LastName: '',
    DOB: new Date(),
    SEX: '',
    DisorderDisability: '',
    Hand: '',
    Glasses: '',
    // email: '',
}




export default function InitForm() {
    let email = ""
    Auth.currentAuthenticatedUser().then((user) => {
        email = user.attributes.email
    })
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('FirstName' in fieldValues)
            temp.FirstName = fieldValues.FirstName ? "" : "This field is required."
        if ('LastName' in fieldValues)
            temp.LastName = fieldValues.LastName ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault()
    }


    function handlePush() {
        setTimeout(() => history.push('/callibrate'), 2000);
    }

    // const [index, setIndex] = useState(0);
    var index = -1

    //todo: replace with actual api989
    const postData = () => {


        const geturl = process.env.REACT_APP_APIRoot + "/TestGroup/get?type=email&identifier=" + email
        axios.get(geturl).then(res => {
            index = res.data.testId;
            if (index != -1) {
                const patchurl = process.env.REACT_APP_APIRoot + "/TestGroup/patch/" + index
                axios.patch(patchurl, {
                    FirstName: values.FirstName, LastName: values.LastName, DOB: values.DOB, SEX: values.SEX,
                    DisorderDisability: values.DisorderDisability, Hand: values.Hand, Glasses: values.Glasses,
                    Email: email
                }).then(function (response) {
                    console.log("patch response:", response);
                }).catch(function (error) {
                    // toast.error('Could not register at this time. Please try again later.');
                    console.log("error loading next page")
                    // setShowRegSpinner(false);
                });
            }
        }
        ).catch(function (error) {
            const posturl = process.env.REACT_APP_APIRoot + "/TestGroup/post"
            // index = null
            // console.log("catch data index", index)
            if (index == -1) {
                axios.post(posturl, {
                    FirstName: values.FirstName, LastName: values.LastName, DOB: values.DOB, SEX: values.SEX,
                    DisorderDisability: values.DisorderDisability, Hand: values.Hand, Glasses: values.Glasses,
                    Email: email
                }).then(function (response) {
                    console.log("post response:", response);

                }).catch(function (error) {
                    // toast.error('Could not register at this time. Please try again later.');
                    console.log("error loading next page")
                    // setShowRegSpinner(false);
                });
            }
        })

        handlePush();
    }
    const getData = () => {
        // const email = ""
        // Auth.currentAuthenticatedUser().then((user) => {
        console.log('user email = ' + email);
        // const email = email
        const url = process.env.REACT_APP_APIRoot + "/TestGroup/get?type=email&identifier=" + email
        axios.get(url).then(res => {
            console.log("testid: ", res.data.testId);
            index = res.data.testId;
            console.log("data index", index)

        }
        )
        //   });


    }

    //todo: test get request
    const getValues = async () => {
        try {
            await Auth.signIn({
                FirstName: values.FirstName,
                LastName: values.LastName,
                DOB: values.DOB,
                SEX: values.SEX,
                DisorderDisability: values.DisorderDisability,
                Hand: values.Hand,
                Glasses: values.Glasses,
            });
        } catch (error) {
            console.error('error', error);

        }
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
                        name="FirstName"
                        label="First Name"
                        value={values.FirstName}
                        onChange={handleInputChange}
                        error={errors.FirstName}
                    />
                    <Input
                        name="LastName"
                        label="Last Name"
                        value={values.LastName}
                        onChange={handleInputChange}
                        error={errors.LastName}
                    />
                    <Input
                        name="DisorderDisability"
                        label="Disorders"
                        value={values.DisorderDisability}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RadioButton
                        name="SEX"
                        label="Gender"
                        value={values.SEX}
                        onChange={handleInputChange}
                        items={genderList}
                    />
                    <RadioButton
                        name="Hand"
                        label="Dominant Hand:"
                        value={values.Hand}
                        onChange={handleInputChange}
                        items={handList}
                    />

                    <RadioButton
                        name="Glasses"
                        label="Do you wear Glasses?"
                        value={values.Glasses}
                        onChange={handleInputChange}
                        items={glassesList}
                    />
                    <DatePicker
                        name="DOB"
                        label="Date of Birth"
                        value={values.DOB}
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
                        <Button
                            type="next"
                            text="Next"
                            color="default"
                            onClick={handlePush}/>
                    </div>

                </Grid>
            </Grid>
        </Form>
    );

}

