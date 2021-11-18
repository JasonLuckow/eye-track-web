import React from 'react'
import {useEffect} from 'react';
import webgazer from 'webgazer';

var eyeMap = new Map();

export default function FrontCam() {

    var videoViewerWidth = 320/2
    var videoViewerHeight = 240/2

    if(window.innerWidth < 900) {
        var videoViewerWidth = 320/3
        var videoViewerHeight = 240/3
    } else {
        var videoViewerWidth = 320/2
        var videoViewerHeight = 240/2
    }
    
    var count = 0
    var key;
    
    useEffect(()=>{
        webgazer.setGazeListener((data, clock)=>{
            if (data == null) {
                return;
            }
            
            key = "xy:" + count
            
            eyeMap.set(key, [data.x.toString(), data.y.toString(), performance.now()])
            // console.log(eyeMap.get(key), key)
            window.localStorage.setItem(key, [data.x.toString(), data.y.toString(), performance.now(), count]);
            // console.log('at localstorage', window.localStorage.getItem(key), key)
            count += 1
            webgazer.setVideoViewerSize(videoViewerWidth, videoViewerHeight)
        })
        webgazer.begin();
        
        webgazer.showFaceOverlay(false)
    }, []);

    // console.log('here', performance.now())
    
    
    return null
}

