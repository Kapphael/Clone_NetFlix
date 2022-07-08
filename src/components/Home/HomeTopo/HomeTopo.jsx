import React from "react";
import './HomeTopo.css';
import { AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


function HomeTopo(){
    return(
        <div className="home_topo">
        <div className="background_topo">

            <div className="navbar_home">
                <div className="logo">
                    <a href='/'>
                    <img src='https://psfonttk.com/wp-content/uploads/2020/09/netflix-logo-png-1024x456.png' alt='Logo Netflix'/>
                    </a>
                </div>

               <div className="right">
                <select className="idiomas">
                        <option>Português</option>
                        <option> English</option>
                    </select>
                
                    <Link to="/login" className="btn_entrarLink">
                    <div className="btn_entrar">
                        <a href='' className="btn_entrar">Entrar </a>
                    </div>
                    </Link>
               </div>
            </div>

            <div className="content_topo">
                    <h1>Filmes, séries e muito mais. Sem limites.</h1>
                    <h2>Assista onde quiser. Cancele quando quiser.</h2>

                    <form className="form_topo" method="get">
                        <h3>Pronto para assistir? Informe seu email para cria ou reiniciar sua assinatura.</h3>
                        <div className="input_form">
                
                            <input type='text' className="inputEmail" placeholder="Email"/>
                            <button type="submit" >Vamos lá <AiOutlineRight className="AiOutlineRight"/>
                           
                        
                             </button>
                        </div>
                    </form>
            </div>
        </div>
        </div>
    )
}

export default HomeTopo;