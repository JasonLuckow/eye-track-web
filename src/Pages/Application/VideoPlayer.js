import React, {useState} from "react";
import aDepth0 from "../../Images/Fig1/a-depth/a-0.png";
import aDepth120 from "../../Images/Fig1/a-depth/a-120.png";
import aDepth100 from "../../Images/Fig1/a-depth/a-100.png";
import aDepth300 from "../../Images/Fig1/a-depth/a-300.png";
import Button from "../../controls/Button";
import {AmplifySignOut} from "@aws-amplify/ui-react";
import Popup from "../../components/Popup"
import RecommendedSetup from "../../Other/RecommendedSetup";
import StepsToFollow from "../../Other/StepsToFollow";
import ImageSetter from "../../components/ImageSetter";



export default function VideoPlayer() {


    const [index, setIndex] = useState(0);
    const [fill1, setFill1] = useState(true);
    const [fill2, setFill2] = useState(true);
    const [fill3, setFill3] = useState(true);
    const [fill4, setFill4] = useState(true);
    const videos = ["../../Images/Fig1/a-depth/a-0.png", "../../Images/Fig1/a-depth/a-120.png", "../../Images/Fig1/a-depth/a-280.png"]

    const ButtonClicked = () => {
        setIndex(index+1)
        setFill1(true);
        setFill2(true);
        setFill3(true);
        setFill4(true);
    }
    const ButtonSelected1 = () => {setFill1(!fill1);}
    const ButtonSelected2 = () => {setFill2(!fill2);}
    const ButtonSelected3 = () => {setFill3(!fill3);}
    const ButtonSelected4 = () => {setFill4(!fill4);}
    const Reset = () => {setIndex(0)}


    return index === videos.length - 1 ?(
        <>

            <ImageSetter>
                <img src={aDepth100} className="image" alt="logo"/>
                <img src={aDepth0} className="image" alt="logo"/>
                <img src={aDepth300} className="image" alt="logo"/>
                <img src={aDepth120} className="image" alt="logo"/>
            </ImageSetter>
            <div className="Question-text">
                <h1>Select all corresponding buttons if the shapes match. Then click "Complete Assessment".</h1>
            </div>
            <div className="Question-text">
                <h1>If you believe none match, just click "Complete Assessment".</h1>
            </div>


            <div className="Button-selection">
                <Button variant={fill1 ? "outlined" : "contained"} size="large" text="Shape 1" onClick={ButtonSelected1} style={{width: 300, height: 200}}/>
                <Button variant={fill2 ? "outlined" : "contained"} size="large" text="Shape 2" onClick={ButtonSelected2} style={{width: 300, height: 200}}/>
                <Button variant={fill3 ? "outlined" : "contained"} size="large" text="Shape 3" onClick={ButtonSelected3} style={{width: 300, height: 200}}/>
                <Button variant={fill4 ? "outlined" : "contained"} size="large" text="Shape 4" onClick={ButtonSelected4} style={{width: 300, height: 200}}/>
            </div>
            <div className="Button-selection">
                <Button text="Complete Assessment!" color="secondary" onClick={ButtonClicked} style={{width: 600, height: 100}}/>
            </div>
        </>
    ):index < videos.length - 1 ? (
        <>
            <Popup
                ButtonText = "Understood"
                title = "Recommendations"
            >
                <RecommendedSetup/>
                <StepsToFollow/>
            </Popup>
            <ImageSetter>
                <img src={aDepth300} className="image" alt="logo"/>
                <img src={aDepth0} className="image" alt="logo"/>
                <img src={aDepth120} className="image" alt="logo"/>
                <img src={aDepth100} className="image" alt="logo"/>
            </ImageSetter>


            <div className="Question-text">
                <h1>Select all corresponding buttons if the shapes match. Then click next question.</h1>
            </div>
            <div className="Question-text">
                <h1>If you believe none match, just click "next question".</h1>
            </div>


            <div className="Button-selection">
                <Button variant={fill1 ? "outlined" : "contained"} size="large" text="Shape 1" onClick={ButtonSelected1} style={{width: 300, height: 200}}/>
                <Button variant={fill2 ? "outlined" : "contained"} size="large" text="Shape 2" onClick={ButtonSelected2} style={{width: 300, height: 200}}/>
                <Button variant={fill3 ? "outlined" : "contained"} size="large" text="Shape 3" onClick={ButtonSelected3} style={{width: 300, height: 200}}/>
                <Button variant={fill4 ? "outlined" : "contained"} size="large" text="Shape 4" onClick={ButtonSelected4} style={{width: 300, height: 200}}/>
            </div>
            <div className="Button-selection">
                <Button text="Next Question >>" color="secondary" onClick={ButtonClicked} style={{width: 600, height: 100}}/>
            </div>
        </>
    ):(
        <>
            <div className="image-wrapper">
                    <h2>YOU HAVE COMPLETED YOUR ASSESSMENT</h2>
                    <Button onClick={Reset} text="restart Test"/>
                    <AmplifySignOut/>
            </div>
        </>
    )
};
