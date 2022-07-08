import React from "react";
import './Login.css';
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login(){

    function expandTermos(){
        let saibaMais = document.querySelector('.saibaMais');
        let info = document.querySelector('.expandTermos');
        saibaMais.classList.add('closed')
        info.classList.add('active')
    }

    function manterLogado(){
        let checkIcon = document.querySelector('.faCheck');
        checkIcon.classList.toggle('active');
    }


    return (
            <div className="container_login">
            <div className="background_login">

                <div className="logo">
                    <a href='/'>
                    <img src='https://psfonttk.com/wp-content/uploads/2020/09/netflix-logo-png-1024x456.png' alt='Logo Netflix'/>
                    </a>
                </div>

                <div className="container_form">
                    <h1>Entrar</h1>

                    <form method="get">
                        <input type='email' placeholder="Email ou número de telefone" />
                        <input type='password' placeholder="Senha" />

                        <Link to="/perfil">
                            <a href="">Entrar</a>
                        </Link>
                    </form>

                    <div className="suporte_login">
                        <div className="suporte_items"> 
                            <div className="checkbox">
                                <div className="box" onClick={manterLogado}><FaCheck className="faCheck"/></div>
                                <span>Lembre-se de mim</span>
                            </div>

                            <a href="#">Precisa de ajuda?</a>
                        </div>
                    </div>

                    <div className="login_msg">
                        <div className="msg_items">
                            <p className="novo">Novo por aqui? <a href="#">Assine agora</a>.</p>
                            <span>Está página é protegida pelo Google reCAPTCHA
                                para garantir que você não é um robô. <a href="#" className="saibaMais" onClick={expandTermos}>Saiba mais.</a>
                            </span>

                            <span className="expandTermos">
                                As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a href="#">Política de Privacidade</a> e <a href="#">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por
                                questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer_login">
                <div className="footer_loginItems">
                    <p>Dúvidas? Ligue <a href="#">0800 591 8942</a></p>

                   <div className="listas">
                   <ul>
                        <li><a href="#">Perguntas frequentes</a></li>
                        <li><a href="#">Preferências de cookies</a></li>
                        <select>
                            <option>Português</option>
                            <option>English</option>
                        </select>
                    </ul>

                   <ul>
                        <li><a href="#">Centro de ajuda</a></li>
                        <li><a href="#">Informações corporativas</a></li>
                    </ul>

                   <ul>
                        <li><a href="#">Termos de uso</a></li>
                    </ul>

                   <ul>
                        <li><a href="#">Privacidade</a></li>
                    </ul>

                   </div>
                </div>

            </div>

          
            </div>

          

        
    )
}

export default Login;