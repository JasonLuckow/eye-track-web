import React, { useState } from "react";
import Button from "../../controls/Button";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Popup from "../../components/Popup"
import RecommendedSetup from "../../Other/RecommendedSetup";
import StepsToFollow from "../../Other/StepsToFollow";
import ImageButtonSetter from "../../components/ImageButtonSetter";
import ImageSet from "../../Images/ImageSet";
import FrontCam from '../../components/FrontCam';
import { Grid, Paper } from "@material-ui/core";
import axios from "axios";
import { Auth } from "aws-amplify";

var tempVal;
var buttonValHash = new Map();

// export default function VideoPlayer() {

require('dotenv').config();

export default function TestPage() {

    let email = ""
    Auth.currentAuthenticatedUser().then((user) => {
        email = user.attributes.email
    })
    const totalQ = 10;
    const [index, setIndex] = useState(0);
    const [buttonTextIndex, setButtonTextIndex] = useState(0);
    const [fill1, setFill1] = useState(true);
    const [fill2, setFill2] = useState(true);
    const [fill3, setFill3] = useState(true);
    const [fill4, setFill4] = useState(true);
    const [fillNo, setFillNo] = useState(true);

    const buttonText = ["Next Question", "Complete Assessment!"];
    const image1 = [ImageSet.figOne.aDepth.a220, ImageSet.figFive.aDepth.a60, ImageSet.figThree.aPlane.a280, ImageSet.figOne.bPlane.b60, ImageSet.figFive.aDepth.a220, ImageSet.figOne.aPlane.a180, ImageSet.figTwo.bPlane.b240, ImageSet.figFour.aPlane.a100, ImageSet.figThree.aDepth.a120, ImageSet.figTwo.aPlane.a200];
    const image2 = [ImageSet.figOne.bPlane.b20, ImageSet.figFour.aDepth.a100, ImageSet.figTwo.aDepth.a0, ImageSet.figTwo.bPlane.b120, ImageSet.figFour.aPlane.a340, ImageSet.figOne.aPlane.a40, ImageSet.figThree.aDepth.a100, ImageSet.figFour.bDepth.b140, ImageSet.figFive.bPlane.b220, ImageSet.figOne.aDepth.a140];
    const image3 = [ImageSet.figTwo.aDepth.a20, ImageSet.figFour.bPlane.b120, ImageSet.figFive.bDepth.b300, ImageSet.figThree.aDepth.a180, ImageSet.figFive.bDepth.b220, ImageSet.figOne.aDepth.a220, ImageSet.figFour.aPlane.a120, ImageSet.figThree.bDepth.b100, ImageSet.figFive.aDepth.a220, ImageSet.figOne.bDepth.b320];
    const image4 = [ImageSet.figThree.bDepth.b300, ImageSet.figFour.bDepth.b20, ImageSet.figTwo.aDepth.a220, ImageSet.figFour.aPlane.a280, ImageSet.figThree.aPlane.a140, ImageSet.figOne.bDepth.b300, ImageSet.figTwo.bDepth.b240, ImageSet.figFour.bPlane.b320, ImageSet.figTwo.bPlane.b160, ImageSet.figThree.aPlane.a260];
    // figOne[1, 2], figFour[2, 3, 4], figTwo[2, 4], None[], figFive[1, 3], figOne[1, 2, 3, 4], figTwo[1, 4], figFour[1, 2, 4], figFive[2, 3], figOne[2, 3]
    const NextButtonClicked = () => {
        if (index === totalQ - 2) { setButtonTextIndex(1) }

        if (fill1 && fill2 && fill3 && fill4 && fillNo) {
            alert(`Please at least one button!`)
        } else if ((!fill1 || !fill2 || !fill3 || !fill4) && (!fillNo)) {
            alert(`Invalid selection`)
        } else if ((!fill1 && fill2 && fill3 && fill4) || (fill1 && !fill2 && fill3 && fill4) || (fill1 && fill2 && !fill3 && fill4) || (fill1 && fill2 && fill3 && !fill4)) {
            alert(`Select another button`)
        } else {
            setIndex(index + 1)

            tempVal = [!fill1, !fill2, !fill3, !fill4];
            buttonValHash.set(index, tempVal);
            console.log(buttonValHash)

            setFill1(true);
            setFill2(true);
            setFill3(true);
            setFill4(true);
            setFillNo(true);
        }

    }
    const ButtonSelected1 = () => { setFill1(!fill1); }
    const ButtonSelected2 = () => { setFill2(!fill2); }
    const ButtonSelected3 = () => { setFill3(!fill3); }
    const ButtonSelected4 = () => { setFill4(!fill4); }
    const ButtonSelectedNo = () => { setFillNo(!fillNo) };
    const Reset = () => {
        postData();
        setIndex(0);
        setButtonTextIndex(0);
        
    }

    // function handlePush() {
    //     setTimeout(() => history.push('/callibrate'), 2000);
    // }



    const postData = () => {
        const posturl = process.env.REACT_APP_APIRoot + "/Result/post"
        // console.log('user email = ' + user.attributes.email);
        // const email = user.attributes.email
        const geturl = process.env.REACT_APP_APIRoot + "/TestGroup/get?type=email&identifier=" + email
        axios.get(geturl).then(res => {
            console.log(res.data.testId);
            const testGroupID = res.data.testId

            // console.log(JSON.stringify(buttonValHash.get(0)))
            axios.post(posturl, {
                testID: JSON.stringify(testGroupID),
                Question1: JSON.stringify(buttonValHash.get(0)),
                Question2: JSON.stringify(buttonValHash.get(1)),
                Question3: JSON.stringify(buttonValHash.get(2)),
                Question4: JSON.stringify(buttonValHash.get(3)),
                Question5: JSON.stringify(buttonValHash.get(4)),
                Question6: JSON.stringify(buttonValHash.get(5)),
                Question7: JSON.stringify(buttonValHash.get(6)),
                Question8: JSON.stringify(buttonValHash.get(7)),
                Question9: JSON.stringify(buttonValHash.get(8)),
                Question10: JSON.stringify(buttonValHash.get(9))
            })
                .then(function (response) {
                    console.log(response);
                    buttonValHash.clear()
                    // handlePush();
                }
                ).catch(function (error) {
                    // toast.error('Could not register at this time. Please try again later.');
                    console.log("error loading next page")
                    // setShowRegSpinner(false);
                });

        }
        )

        // handlePush();
    }


    return index <= totalQ - 1 ? (
        <>

            <Popup
                ButtonText="Understood"
                title="Recommendations"
            >
                <RecommendedSetup />
                <StepsToFollow />
            </Popup>
            <Grid container spacing={2} style={{ width: "95%", height: "95%" }} alignItems="flex-start">


                <Grid item xs={12}>
                    <Paper elevation={0} style={{ width: "90%", height: "100%", margin: "auto" }} >Select all corresponding buttons if the shapes match. Then click {buttonText[buttonTextIndex]}.</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} style={{ width: "90%", height: "100%", margin: "auto" }}>If you believe none match, please select "No Matches".</Paper>
                </Grid>


                <Grid container item xs={3} justify="center">
                    <ImageButtonSetter src={image1[index]} alt="Image 1" variant={fill1 ? "outlined" : "contained"} size="large" text="Shape 1" onClick={ButtonSelected1} />
                </Grid>
                <Grid container item xs={3} justify="center">
                    <ImageButtonSetter src={image2[index]} alt="Image 2" variant={fill2 ? "outlined" : "contained"} size="large" text="Shape 2" onClick={ButtonSelected2} />
                </Grid>
                <Grid container item xs={3} justify="center">
                    <ImageButtonSetter src={image3[index]} alt="Image 3" variant={fill3 ? "outlined" : "contained"} size="large" text="Shape 3" onClick={ButtonSelected3} />
                </Grid>
                <Grid container item xs={3} justify="center">
                    <ImageButtonSetter src={image4[index]} alt="Image 4" variant={fill4 ? "outlined" : "contained"} size="large" text="Shape 4" onClick={ButtonSelected4} />
                </Grid>


                <Grid container item xs={3} justify="center">
                    <Button variant={fillNo ? "outlined" : "contained"} size="large" text="No Matches" onClick={ButtonSelectedNo} style={{ width: "50%", height: "100%" }} />
                </Grid>

                <Grid container item xs={6} alignItems="flex-end" justify="center">
                    <FrontCam />
                </Grid>

                <Grid container item xs={3} justify="center">
                    <Button text={buttonText[buttonTextIndex]} color="secondary" onClick={NextButtonClicked} style={{ width: "50%", height: "100%" }} />
                </Grid>
            </Grid>
        </>
    ) : (
        <>
            <h2>YOU HAVE COMPLETED YOUR ASSESSMENT</h2>
            <Button onClick={Reset} text="Restart Test" />
            <AmplifySignOut />

        </>
    )
};
