import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="footer">
        <div className="footer_items">
        <p>Dúvidas? Ligue <a href="">0800 591 8942</a></p>

        <div className="cont_itemFooter">
            <div className="lista">
                <ul>
                    <li><a href="">Perguntas frequentes</a></li>
                    <li><a href="">Relações com investidores</a></li>
                    <li><a href="">Formas de assistir</a></li>
                    <li><a href="">Informações corporativas</a></li>
                    <li><a href="">So na Netflix</a></li>
                </ul>

                <select className="idiomas">
                    <option>Português</option>
                    <option> English</option>
                </select>

                <span>Netflix Brasil</span>
            </div>

            <div className="lista">
                <ul>
                    <li><a href="">Centro de ajuda</a></li>
                    <li><a href="">Carreiras</a></li>
                    <li><a href="">Termos de uso</a></li>
                    <li><a href="">Entre em contato</a></li>
                </ul>
            </div>

            <div className="lista">
                <ul>
                    <li><a href="">Conta</a></li>
                    <li><a href="">Resgatar cartão pré-pago</a></li>
                    <li><a href="">Privacidade</a></li>
                    <li><a href="">Teste de velocidade</a></li>
                </ul>
            </div>

            <div className="lista">
                <ul>
                    <li><a href="">Media Center</a></li>
                    <li><a href="">Comprar cartão pré-pago</a></li>
                    <li><a href="">Preferências de cookies</a></li>
                    <li><a href="">Avisos legais</a></li>
                </ul>
            </div>
        </div>
 
        </div>
    </div>
    )
}

export default Footer;