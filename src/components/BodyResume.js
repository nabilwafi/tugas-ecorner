import React from 'react';

const BodyResume = () => {
    return (
        <div className='section'>
            <div className='resume-container body-grid'>
                <h1 className='section-title'>Resume</h1>

                <div className='resume'>
                    <h1 className='resume-title'>Work Experience</h1>

                    <div className='resume-history'>
                        <div className='resume-box'>
                            <p className='resume-date'>2020-Present</p>
                            <div className='resume-data'>
                                <h5 className='resume-profession'>Editor</h5>
                                <p className='resume-description'>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                </p>
                            </div>
                        </div>

                        <div className='resume-box'>
                            <p className='resume-date'>2018-2020</p>
                            <div className='resume-data'>
                                <h5 className='resume-profession'>Writer at Large</h5>
                                <p className='resume-description'>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                </p>
                            </div>
                        </div>

                        <div className='resume-box'>
                            <p className='resume-date'>2017-2018</p>
                            <div className='resume-data'>
                                <h5 className='resume-profession'>Intern</h5>
                                <p className='resume-description'>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='resume'>
                    <h1 className='resume-title'>Education</h1>

                    <div className='resume-history'>
                        <div className='resume-box'>
                            <p className='resume-date'>2015-2017</p>
                            <div className='resume-data'>
                                <h5 className='resume-profession'>Establishment Name | Master’s Degree</h5>
                                <p className='resume-description'>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                </p>
                            </div>
                        </div>

                        <div className='resume-box'>
                            <p className='resume-date'>2015-2017</p>
                            <div className='resume-data'>
                                <h5 className='resume-profession'>Establishment Name | Master’s Degree</h5>
                                <p className='resume-description'>
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='resume border-none'>
                    <h1 className='resume-title'>Skills & Expertise</h1>

                    <div className='resume-history'>
                        <div className='resume-box'></div>
                        <div className='resume-box'>
                            <div className='resume-date'></div>
                            <div className='resume-description'>
                                <ul>
                                    <li>&bull; I'm a paragraph. Click here to add your own text and edit me.</li>
                                    <li>&bull; I'm a paragraph. Click here to add your own text and edit me.</li>
                                    <li>&bull; I'm a paragraph. Click here to add your own text and edit me.</li>
                                    <li>&bull; I'm a paragraph. Click here to add your own text and edit me.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyResume;