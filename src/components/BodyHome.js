import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/image/profile.jpg';

const BodyHome = () => {
    return (
        <div className='main-layout'>
            <div className='home body-grid'>
                <img src={profile} className='home-img' />

                <div className='home-text'>
                    <h1 className='home-title home-margin'>Hello</h1>
                    <h3 className='home-subtitle home-margin'>A Bit About Me</h3>
                    <p className='home-description home-margin'>
                        I am a student of the Indonesian Computer University, majoring in Information Systems, and now I am studying programming, and most importantly I like sushi and donuts
                    </p>

                    <div className='home-buttons'>
                        <Link to="/resume" className='home-btn red'>
                            <p className='btn-link'>Resume</p>
                        </Link>
                        <Link to="/contact" className='home-btn blue'>
                            <p className='btn-link'>Contact</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyHome;