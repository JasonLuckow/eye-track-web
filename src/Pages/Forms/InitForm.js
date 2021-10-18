import React from 'react';
import {useForm, Form} from "../../components/UseForm";
import Input from "../../controls/Input";
import RadioButton from "../../controls/RadioButton";
import DatePicker from "../../controls/DatePicker";
import {Grid} from "@material-ui/core";
import Button from "../../controls/Button";
import axios from "axios";
import Constants from "../../Constants";
import Key from "../../API/Key";
import {Auth} from "aws-amplify";

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

    const handleSubmit = e => {
        e.preventDefault()
        if (validate())
            window.alert('Submitting Form...')
    }

    //todo: replace with actual api989
    const postData = () => {
        const url = Constants.APIRoot + "TestGroup/post"
        axios.post(url, {
            FirstName: values.FirstName, LastName: values.LastName, DOB: values.DOB, SEX: values.SEX,
            DisorderDisability: values.DisorderDisability, Hand: values.Hand, Glasses: values.Glasses
        }).then((res,) => {
                console.log(res);
            }
        )
    }
    const getData = () => {
        const url = Constants.APIRoot + "TestGroup/get"
        axios.get(url, {
            FirstName: values.FirstName, LastName: values.LastName, DOB: values.DOB, SEX: values.SEX,
            DisorderDisability: values.DisorderDisability, Hand: values.Hand, Glasses: values.Glasses
        }).then((res,) => {
                console.log(res);
            }
        )
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
                    </div>

                </Grid>
            </Grid>
        </Form>
    );

}

