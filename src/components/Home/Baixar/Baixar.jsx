import React from "react";
import './Baixar.css';
import baixar from '../../../img/baixar.png';

function BaixarDiv(){
    return(
        <div className="content_baixar">
        <div className="baixar">
            <div className="baixar_img">
                <img src={baixar} alt="Baixar image" />

                <div className="cont_download">
                    <div className="cont_items">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="Serie download" />
                    <p>Downloado em andamento...</p>
                    </div>

                    <div className="gifDownload">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                    </div>
                    
                </div>
            </div>
            <div className="baixar_text">
                <h1>Baixe séries para assitir offline</h1>
                <h2>Salve seus títulos favoritos e sempre tenha algo para assistir</h2>
            </div>
        </div>
            
    </div>
    )
}

export default BaixarDiv;