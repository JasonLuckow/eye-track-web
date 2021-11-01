import React from 'react'
import {useEffect} from 'react';
import webgazer from 'webgazer';


export default function FrontCam() {

    const videoViewerWidth = 320/2
    const videoViewerHeight = 240/2
    
    useEffect(()=>{
        webgazer.setGazeListener((data, clock)=>{
            webgazer.setVideoViewerSize(videoViewerWidth, videoViewerHeight)
        }).begin();
        
        webgazer.showFaceOverlay(false)
    }, []);
    
    
    return null
}

