import React, {useState, useEffect} from "react";
import {useForm, Form} from "../../components/UseForm";
import Input from "../../controls/Input";
import RadioButton from "../../controls/RadioButton";
import DatePicker from "../../controls/DatePicker";
import {Grid} from "@material-ui/core";
import Button from "../../controls/Button";
import axios from "axios";
import {Auth} from "aws-amplify";
import {useHistory} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

require('dotenv').config();

const genderList = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'}
]
const handList = [
    {id: 'right', title: 'Right'},
    {id: 'left', title: 'Left'}
]

const glassesList = [
    {id: 'yes', title: 'Yes'},
    {id: 'no', title: 'No'}
]

const initialFValues = {
    //id: 0,
    FirstName: '',
    LastName: '',
    DOB: '',
    SEX: null,
    DisorderDisability: '',
    Hand: null,
    Glasses: null,
    // email: '',
}

export default function InitForm() {

    const [email, setEmail] = useState(null)
    const [disorderDisability, setDisorder] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [gender, setGender] = useState(null)
    const [hand, setHand] = useState(null)
    const [glasses, setGlasses] = useState(null)
    const [dob, setDOB] = useState(null)
    const [url, setUrl] = useState(null)

    // Only need to do this once but it does this at every render
    // i.e. every key press or value change which makes it an inefficient use of api

    Auth.currentAuthenticatedUser().then((user) => {
        setEmail(user.attributes.email)
        setUrl(process.env.REACT_APP_APIRoot + "/TestGroup/get?type=email&identifier=" + email)
    })

    axios.get(url
    ).then(res => {
        setDisorder(res.data.DisorderDisability)
        setFirstName(res.data.FirstName)
        setLastName(res.data.LastName)
        setGender(res.data.SEX)
        setHand(res.data.Hand)
        setGlasses(res.data.Glasses)
        setDOB((res.data.DOB))
    }).catch(function (error) {
        // toast.error('Could not register at this time. Please try again later.');
        console.log("error loading get request on form")
        // setShowRegSpinner(false);
    });

    const validate = (fieldValues = values) => {
        let temp = {...errors}
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

    const [disabled, setDisabled] = useState(false);

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault()
    }


    function handlePush() {
        for(var i in localStorage)
        {
            if (i.startsWith('xy:')){
                window.localStorage.removeItem(i)
            }
            
        }
        setTimeout(() => history.push('/callibrate'), 2000);
    }

    // const [index, setIndex] = useState(0);
    var index = -1

    //todo: replace with actual api989
    const postData = () => {
        setDisabled(true)
        const geturl = process.env.REACT_APP_APIRoot + "/TestGroup/get?type=email&identifier=" + email
        axios.get(geturl
        ).then(res => {

            index = res.data.testId;
            if (index != -1) {
                const patchurl = process.env.REACT_APP_APIRoot + "/TestGroup/patch/" + index
                axios.patch(patchurl, {
                    FirstName: values.FirstName || firstName,
                    LastName: values.LastName || lastName,
                    DOB: values.DOB || dob,
                    SEX: values.SEX || gender,
                    DisorderDisability: values.DisorderDisability || disorderDisability,
                    Hand: values.Hand || hand,
                    Glasses: values.Glasses || glasses,
                    Email: email
                }).then(function (response) {
                    toast.success("Success! Let's calibrate");
                    // console.log("patch response:", response);
                    handlePush()
                }).catch(function (error) {
                    toast.error('Could not update your information');
                    console.log("error at patch request on form")
                    // setShowRegSpinner(false);
                });
            }
        }).catch(function (error) {
            console.log("could not patch")
            const posturl = process.env.REACT_APP_APIRoot + "/TestGroup/post"
            if (index == -1) {
                axios.post(posturl, {
                    FirstName: values.FirstName, LastName: values.LastName, DOB: values.DOB, SEX: values.SEX,
                    DisorderDisability: values.DisorderDisability, Hand: values.Hand, Glasses: values.Glasses,
                    Email: email
                }).then(function (response) {
                    toast.success("Success! Let's calibrate");
                    // console.log("post response:", response);
                    handlePush()
                }).catch(function (error) {
                    toast.error('Could not process your data. Make sure all fields are filled out.');
                    console.log("error at post request on form")
                    setDisabled(false)
                    // setShowRegSpinner(false);
                })
            }
        })

        
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
        <>
        <ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
			/>
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Input

                        name="FirstName"
                        label={firstName || "First Name"}
                        value={values.FirstName}
                        onChange={handleInputChange}
                        error={errors.FirstName}
                    />
                    <Input
                        name="LastName"
                        label={lastName || "Last Name"}
                        value={values.LastName}
                        onChange={handleInputChange}
                        error={errors.LastName}
                    />
                    <Input
                        name="DisorderDisability"
                        label={disorderDisability || "Disorders"}
                        value={values.DisorderDisability}
                        onChange={handleInputChange}
                    />
                    <DatePicker
                        name="DOB"
                        label="Date of Birth"
                        value={values.DOB || dob}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RadioButton
                        name="SEX"
                        label="Gender"
                        value={values.SEX || gender}
                        onChange={handleInputChange}
                        items={genderList}
                    />
                    <RadioButton
                        name="Hand"
                        label="Dominant Hand:"
                        value={values.Hand || hand}
                        onChange={handleInputChange}
                        items={handList}
                    />

                    <RadioButton
                        name="Glasses"
                        label="Do you wear Glasses?"
                        value={values.Glasses || glasses}
                        onChange={handleInputChange}
                        items={glassesList}
                    />
                    <div>
                    <Button
                        onClick={postData}
                        type="submit"
                        text="Submit"
                        disabled={disabled}
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
        </>
    );

}

