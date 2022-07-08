import React from "react";
import './Assista.css';

function Assista(){
    return(
        <div className="cont_assista">
        <div className="assista">

            <div className="assista_text">
                <h1>Assista quando quiser.</h1>
                <h2>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</h2>
            </div>

            <div className="cont_video">
                <div className="moldura_assista">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="moldura pc"/>

                    <div className="video_assista">
                        <video autoPlay playsInline muted loop>
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />
                        </video>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Assista;