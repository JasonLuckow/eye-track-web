import React from 'react'
import {useEffect} from 'react';
import webgazer from 'webgazer';

export default function FrontCam() {
    useEffect(()=>{
        webgazer.setGazeListener((data, clock)=>{
            console.log(data, clock);
        }).begin();
    }, []);
    return null
}

