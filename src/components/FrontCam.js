import React from 'react'
import {useEffect} from 'react';
import webgazer from '../../node_modules/webgazer/dist/webgazer.commonjs2';

export default function FrontCam() {
    useEffect(()=>{
        webgazer.setGazeListener((data, clock)=>{
            // console.log(data, clock);
        }).begin();
    }, []);
    return null
}

