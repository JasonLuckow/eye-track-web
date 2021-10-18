
import React, {useState} from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))

export default function CallibrateButton(props) {

    const {width, height, left, top, onClick} = props
    const classes = useStyles();


    return (
        <MuiButton
            variant={"contained"}
            size={"small"}
            color={"primary"}
            onClick={onClick}
            style=
            {{width: width || 30, 
                height: height || 30, 
                position: 'absolute', 
                left: left || 350, 
                top:top || 100}}>
            {'click'}
        </MuiButton>
    )
}