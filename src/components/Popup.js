import React, {useState} from "react";
import {Dialog, DialogContent, DialogTitle, makeStyles} from "@material-ui/core";
import Button from "../controls/Button";


   const useStyles = makeStyles(theme => ({
        dialogPaper: {

            height : 'full'
        }
    }));

export default function Popup(props){
    const {title, children, ButtonText} = props;

    const [closePopup, setClosePopup] = useState(true)
    const ClosePopup = () => {
        setTimeout(() => {setClosePopup(!closePopup)}, 1000);
        // setClosePopup(!closePopup);
    }

    const classes = useStyles();

    return(
        <Dialog open={closePopup} classes={{paper: classes.dialogPaper}}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
                <Button onClick={ClosePopup} text={ButtonText} size="small"/>
            </DialogContent>
        </Dialog>
    )
}