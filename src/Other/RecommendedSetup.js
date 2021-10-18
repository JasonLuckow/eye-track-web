import React from "react";

export default function RecommendedSetup(){
    return(
        <div>
            <b>This kind of setup provides the best eye-tracking data:</b>
            <menu>
                <li>The eye-tracking sampling rate of at least 30 Hz, up to 60 Hz.</li>
                <li>The best accuracy and precision thanks to fast face landmark detection.</li>
            </menu>
            <b>Recommended Participant Hardware and Software:</b>
            <menu>
                <li>1080p @ 30FPS or 720p @ 60 FPS webcam, with good quality image.</li>
                <li>Updated Google Chrome or Microsoft Edge browser. Firefox is highly NOT recommended.</li>
                <li>Updated Windows 10 or macOS X.</li>
                <li>4-core Intel processor, 3 GHz or faster, 5th gen. or later.</li>
                <li>If using a laptop then it MUST be plugged into the power cord.</li>
                <li>8 GB of RAM with at least 4 GB of memory available (not used).</li>
                <li>DirectX 12 graphics card with updated drivers. Integrated Intel Graphics (gen. 5 or later) is fast enough.</li>
                <li>Internet connection speed 20 Mbps | 5 Mbps (for live website testing especially, can be less for image/video testing).</li>
            </menu>
        </div>
    )
}