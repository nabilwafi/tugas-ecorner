import React from 'react';
import '../assets/css/Style.css';
import './Footer.css';
import 'boxicons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-wrap'>
                <div className='footer-box'>
                    <h1 className='footer-title'>Phone</h1>
                    <p className='footer-text'>123-456-789</p>
                </div>
                <div className='footer-box'>
                    <h1 className='footer-title'>Email</h1>
                    <p className='footer-text'>info@mysite.com</p>
                </div>
                <div className='footer-box'>
                    <h1 className='footer-title'>Follow Me</h1>
                    <div className='foote-social'>
                        <span className='footer-social-item'>
                            <box-icon type='logo' name='linkedin'></box-icon>
                        </span>
                        <box-icon name='twitter' type='logo' ></box-icon>
                    </div>
                </div>
                <div className='footer-box'>
                    <p className='footer-copyright'>&copy; 2023 By Muhammad Nabil Wafi</p>
                    <p className='footer-copyright-sub'>Proudly created with <span>Nabil Wafi</span></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;