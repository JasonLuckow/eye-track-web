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

    const TEST = [{xCoordinate: "xTest", yCoordinate: "yTest"},{xCoordinate: "xTest", yCoordinate: "yTest"},{xCoordinate: "xTest", yCoordinate: "yTest"},{xCoordinate: "xTest", yCoordinate: "yTest"}];

    const data = csvRows;

    const headers = [{label: "xCoordinate", key: "xCoordinate"}, {label: "yCoordinate", key: "yCoordinate"}];

    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: TEST
    };

    useEffect(() => {
        webgazer.setGazeListener((data) => {
            if (data == null) {
                return;
            }
            //xpredition = data.x;
            //ypredition = data.y;
            xpredition = 'xTEST';
            ypredition = 'yTEST';
            eyeLocation = {xCoordinate: xpredition, yCoordinate: ypredition};
            //console.log(eyeLocation);
            csvRows.push(eyeLocation);
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