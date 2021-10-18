import React, {useState} from "react";
import {Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import Button from "../controls/Button";


export default function Popup(props){
    const {title, children, ButtonText} = props;

    const [closePopup, setClosePopup] = useState(true)
    const ClosePopup = () => {setClosePopup(!closePopup)}

    return(
        <Dialog open={closePopup}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogContent>
                <Button onClick={ClosePopup} text={ButtonText}/>
            </DialogContent>
        </Dialog>
    )
}