import React from 'react'
import {useEffect} from 'react';
import webgazer from 'webgazer';
import Button from "../controls/Button";
import { CSVLink, CSVDownload } from "react-csv";

export default function CSV() {

    var xpredition;
    var ypredition;
    var eyeLocation;
    var csvRows = [];
    var eyeArray = [];

    const TEST = [{xCoordinate: "xTest", yCoordinate: "yTest"},{xCoordinate: "xTest", yCoordinate: "yTest"},{xCoordinate: "xTest", yCoordinate: "yTest"},{xCoordinate: "xTest", yCoordinate: "yTest"}];
    const TestArray = [[1,2],[3,4],[5,6]]
    const headers = ["xCoordinate","yCoordinate"];

    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: TestArray
    };

    useEffect(() => {
        webgazer.setGazeListener((data) => {
            if (data == null) {
                return;
            }
            xpredition = data.x;
            ypredition = data.y;
            //xpredition = 'xTEST';
            //ypredition = 'yTEST';
            eyeArray = [xpredition.toString(),ypredition.toString()]
            eyeLocation = {xCoordinate: xpredition.toString(), yCoordinate: ypredition.toString()};
            //console.log(eyeLocation);
            csvRows.push(eyeArray);
            // console.log("Eye Location: " + eyeLocation);
            console.log(csvRows);
        }).begin();
    }, []);
    return (
        <div>
            <CSVLink {...csvReport}>Export to CSV</CSVLink>
        </div>
    )
}