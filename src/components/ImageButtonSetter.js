import React from 'react';
import {Paper} from "@material-ui/core";
import Button from "../controls/Button";


export default function ImageButtonSetter(props){
    const {src, alt, variant, size, text, onClick} = props;
    return(
        <Paper elevation={0}>
            <img src={src} className="image" alt={alt}/>
            <Button variant={variant} size={size} text={text} onClick={onClick} style={{width: "100%"}}/>
        </Paper>
    )
}
// hi