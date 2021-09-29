import React, {useState} from "react";
import ReactPlayer from "react-player";
import "./VideoPlayerDesign.css"
import aDepth0 from "../../Images/Fig1/a-depth/a-0NB.png";
import aDepth120 from "../../Images/Fig1/a-depth/a-120NB.png";


export default function VideoPlayer() {

    const [index, setIndex] = useState(0)
    //const videos = ["https://www.youtube.com/watch?v=PunVHiOxUEk","https://www.youtube.com/watch?v=p0EaGb0jdUs&t=255s", "https://www.youtube.com/watch?v=bMT2M1WghRI"]
    const videos = ["../../Images/Fig1/a-depth/a-0.png", "../../Images/Fig1/a-depth/a-120.png", "../../Images/Fig1/a-depth/a-280.png"]

    function ButtonClicked() {
        setIndex(function(curr){
            if (curr < videos.length){
                return curr + 1
            }
        })
    }

    return index == videos.length-1 ?(

        <div className="player-wrapper">
            <img src={aDepth0} className="App-logo" alt="logo" />
            <ReactPlayer
 //               url={videos[index]}
            />
            <button onClick={ButtonClicked}>
                Complete Assessment >>
            </button>
        </div>
    ): index != videos.length ? (
        <div className="player-wrapper">
            <img src={aDepth0} className="App-logo" alt="logo" />
            <img src={aDepth120} className="App-logo2" alt="logo" />
            <ReactPlayer
//                url={videos[index]}
            />
            <button onClick={ButtonClicked}>
                Next Video >>
            </button>
        </div>
    ):(
        <div className="player-wrapper">
            <h2>YOU HAVE COMPLETED YOUR ASSESSMENT</h2>
        </div>
    )
};
