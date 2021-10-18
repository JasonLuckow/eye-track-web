import React from "react";

export default function StepsToFollow(){
    return(
        <div>
            <b>To get the best webcam eye-tracking results, please follow these simple recommendations:</b>
            <menu>
                <li>Webcam MUST be mounted on a screen that displays stimuli. Webcam image MUST be very steady -
                    make sure the whole setup does not shake, eg. do not keep laptop on your knees. </li>
                <li>User MUST sit in front of the webcam. Webcam SHOULD be slightly below user's eye level.</li>
                <li>User's face SHOULD be in good lightning. The lightning SHOULD NOT change during the whole test.
                    There MUST be only one face caught by the webcam.</li>
                <li>User's eyes MUST be clearly visible in webcam video. User's face size SHOULD be at least 1/3 of
                    webcam picture. We recommend user NOT TO wear glasses if possible. Glasses MUST NOT limit pupils'
                    visibility for the webcam.</li>
                <li>User SHOULD sit comfortably and SHOULD try to keep head still. It is highly recommended to use a
                    chair with head rest - user should rest her/his head. Otherwise, user could support his/her head on
                    his/her arm.</li>
            </menu>
        </div>
    )
}