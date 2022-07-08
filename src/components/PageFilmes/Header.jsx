import React from 'react';
import './Header.css';
import { FaSearch, FaBell } from "react-icons/fa";


function Header({black}){
    return(
        <header className={black ? 'black' : ''}>
            <div className='header_logo'>
                <a href='#'>
                    <img src='https://psfonttk.com/wp-content/uploads/2020/09/netflix-logo-png-1024x456.png' alt='Logo Netflix'/>
                </a>

                <ul>
                    <li className='active'>ínicio</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                </ul>
            </div>

            <div className='header_user'>
                <FaSearch className='FaSearch'/>
                <FaBell className='FaBell' />

                <a href='#'>
                    <img src='https://noirflix.netlify.app/imgs/icon1.png' alt='user Netflix' />
                </a>
            </div>

        </header>
    )
}

export default Header;