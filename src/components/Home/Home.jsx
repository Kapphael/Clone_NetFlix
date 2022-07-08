import React from "react";
import HomeTopo from '../Home/HomeTopo/HomeTopo';
import Aproveite from "../Home/Aproveite/Aproveite";
import BaixarDiv from "../Home/Baixar/Baixar";
import Assista from "../Home/Assista/Assista";
import Kids from "../Home/Kids/Kids";
import Perguntas from "../Home/Perguntas/Perguntas";
import Footer from "../Home/Footer/Footer";


function Home(){
    return(
        <div className="container_Home">
           <HomeTopo />
            <Aproveite />
            <BaixarDiv />
            <Assista />
            <Kids />
            <Perguntas />
            <Footer />

        </div>
    )
}

export default Home;