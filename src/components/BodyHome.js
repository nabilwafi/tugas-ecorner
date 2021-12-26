import React from 'react';
import '../assets/css/Style.css';
import './BodyHome.css';
import profile from '../assets/image/profile.jfif';

const BodyHome = () => {
    return (
        <div className='container'>
            <img src={profile} className='profile-img' />

            <div className='text-box'>
                <h1 className='text-box-title'>Hello</h1>
                <h3 className='text-box-subtitle'>A Bit About Me</h3>
                <p className='text-box-description'>
                    I'm a paragraph. Click here to add your own text and edit me. I'm great place for you to tell a story and let your users know a little more about you.
                </p>

                <div className='text-box-button-box'>
                    <div className='btn resume'>
                        <a href='/resume' className='btn-link'>Resume</a>
                    </div>
                    <div className='btn contact'>
                        <a href='/contact' className='btn-link'>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyHome;