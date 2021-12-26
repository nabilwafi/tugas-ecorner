import React from 'react';
import '../assets/css/Style.css';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='header-home'>
                <div className='header-home-circle'></div>
                <h1 className='header-home-name'>Nabil Wafi</h1>
                <p className='header-home-profession'>Programmer</p>
            </Link>

            <div className='header-navigation'>
                <ul className='header-navbar'>
                    <li className='header-nav'>
                        <Link to='/resume' className='header-nav-link'>Resume</Link>
                    </li>
                    <li className='header-nav'>
                        <Link to='/contact' className='header-nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;