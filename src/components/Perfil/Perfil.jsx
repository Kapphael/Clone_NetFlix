import React from "react";
import './Perfil.css';
import {Link} from 'react-router-dom';
import Avatar1 from '../../img/Netflix-avatar.png';
import Avatar2 from '../../img/Avatar-2.jpg';
import Avatar3 from '../../img/Avatar-3.png';
import Avatar4 from '../../img/Avatar-4.png';
import Avatar5 from '../../img/Avatar-5.png';

function Perfil(){
    
   
    function teste(){
        let container = document.querySelector('[data-effect');
        container.classList.add('active');
    }
    

   
    return(
        <div className="container_perfil" onLoad={teste}>

            <div className="perfil_navbar">
                <div className="logo">
                    <a href='/'>
                    <img src='https://psfonttk.com/wp-content/uploads/2020/09/netflix-logo-png-1024x456.png' alt='Logo Netflix'/>
                    </a>
                </div>
            </div>

            <div className="container_avatares" data-effect="">
                <h1>Quem está assistindo?</h1>

                <div className="avatares">
                    <Link to='/feature' className="linkTo">
                        <div className="perfil">
                            <img src={Avatar1} alt="Avatar 1" className="avatarImg"/>
                            <p>Usuário 1</p>

                        </div>
                    </Link>

                    <Link to='/feature' className="linkTo">
                        <div className="perfil">
                            <img src={Avatar2} alt="Avatar 1" className="avatarImg"/>
                            <p>Usuário 2</p>

                        </div>
                    </Link>

                    <Link to='/feature' className="linkTo">
                        <div className="perfil">
                            <img src={Avatar3} alt="Avatar 1" className="avatarImg"/>
                            <p>Usuário 3</p>

                        </div>
                    </Link>

                    <Link to='/feature' className="linkTo">
                        <div className="perfil">
                            <img src={Avatar4} alt="Avatar 1" className="avatarImg"/>
                            <p>Usuário 4</p>

                        </div>
                    </Link>

                   <Link to='/feature' className="linkTo">
                    <div className="perfil">
                            <img src={Avatar5} alt="Avatar 1" className="avatarImg"/>
                            <p>Usuário 5</p>

                        </div>
                   </Link>
                </div>

                <a href="#" className="btnGerenciar">Gerenciar perfis</a>
            </div>

               
               
            

        </div>
    )
}

export default Perfil;