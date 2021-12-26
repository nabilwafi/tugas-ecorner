import React from 'react';
import './BodyResume.css';

const BodyResume = () => {
    return (
        <div className='container-resume'>
            <h1 className='title'>Resume</h1>

            <div className='resume-box'>
                <div className='resume-box-box'>
                    <h3 className='resume-title'>Work <br/> Experience</h3>

                    <div className='resume-description-box'>
                        <div className='resume-description-flex'>
                            <p className='resume-date'>2020-Present</p>
                            <div className='resume-work'>
                                <div className='resume-work-box'>
                                    <h5 className='resume-work-title'>Editor</h5>
                                    <p className='resume-work-description'>
                                        I'am a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='resume-description-flex'>
                            <p className='resume-date'>2018-2020</p>
                            <div className='resume-work'>
                                <div className='resume-work-box'>
                                    <h5 className='resume-work-title'>Writer at Large</h5>
                                    <p className='resume-work-description'>
                                        I'am a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='resume-description-flex'>
                            <p className='resume-date'>2017-2018</p>
                            <div className='resume-work'>
                                <div className='resume-work-box'>
                                    <h5 className='resume-work-title'>Intern</h5>
                                    <p className='resume-work-description'>
                                        I'am a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='resume-box'>
                <div className='resume-box-box'>
                    <h3 className='resume-title'>Education</h3>

                    <div className='resume-description-box'>
                        <div className='resume-description-flex'>
                            <p className='resume-date'>2015 - 2017</p>
                            <div className='resume-work'>
                                <div className='resume-work-box'>
                                    <h5 className='resume-work-title'>Establishment Name | <br/> Master's Degree</h5>
                                    <p className='resume-work-description'>
                                        I'am a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='resume-description-flex'>
                            <p className='resume-date'>2012 - 2015</p>
                            <div className='resume-work'>
                                <div className='resume-work-box'>
                                    <h5 className='resume-work-title'>Establishment Name | <br/> Master's Degre</h5>
                                    <p className='resume-work-description'>
                                        I'am a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='resume-box'>
                <div className='resume-box-box'>
                    <h3 className='resume-title'>Skills <br/> & Expertise</h3>

                    <div className='resume-description-box'>
                        <div className='resume-description-list'>
                            <ul className='list-skills'>
                                <li className='list-skills-item'>I'm a paragraph. Click here to add your own text and edit me.</li>
                                <li className='list-skills-item'>I'm a paragraph. Click here to add your own text and edit me.</li>
                                <li className='list-skills-item'>I'm a paragraph. Click here to add your own text and edit me.</li>
                                <li className='list-skills-item'>I'm a paragraph. Click here to add your own text and edit me.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyResume;