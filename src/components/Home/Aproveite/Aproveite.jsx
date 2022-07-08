import React from "react";
import './Aproveite.css';
import moldura from '../../../img/molduraTv.png';


function Aproveite(){
    return(
        <div className="cont_aproveite">
        <div className="aproveite">
            <div className="aproveite_text">
                <h1>Aproveite na TV.</h1>
                <h2>Assista em Smart Tvs, PlayStation, Xbox, Chromecast, Apple Tv, aparelhos de Blue-ray e outros dispositivos.</h2>
            </div>

            <div className="aproveite_img">
                <div className="moldura_tv">
                    <img src={moldura}  alt="moldura Tv" />
                    
                    <div className="video_tv">
                       <video autoPlay playsInline muted loop>
                           <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                       </video>
                    </div>
                 </div>
                </div>  
        </div>
    </div>
    )
}

export default Aproveite;