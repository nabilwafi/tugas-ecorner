import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <nav className='nav body-grid'>
                <div className='nav-flex'>
                    <Link to='/' className='nav-flex nav-logo'>
                        <div className='nav-circle'></div>
                        <h5 className='nav-name'>Nabil Wafi</h5>
                    </Link>

                    <p className='nav-profession'>Programmer & Designer</p>
                </div>

                <div className='nav-menu' id='nav-menu'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-link'>Resume</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;