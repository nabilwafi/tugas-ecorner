import React from 'react';

const BodyContact = () => {
    return (
        <div className='section'>
            <div className='contacts-container'>
                <div className='contact body-grid'>
                    <div className='contact-text'>
                        <h1 className='section-title section-contact'>Contact</h1>
                        <p className='contact-subtitle'>Looking forward to hearing from you</p>

                        <div className='contact-address'>
                            <h5 className='contact-title'>Phone</h5>
                            <p className='contact-description'>123-456-7890</p>
                        </div>

                        <div className='contact-address'>
                            <h5 className='contact-title'>Email</h5>
                            <p className='contact-description'>info@mysite.com</p>
                        </div>
                    </div>

                    <div className='contact-form'>
                        <form className='contact-inputs'>
                            <div className='form-box'>
                                <label className='form-label'>First Name</label>
                                <input className='form-input' type="text" />
                            </div>

                            <div className='form-box'>
                                <label className='form-label'>Last Name</label>
                                <input className='form-input' type="text" />
                            </div>

                            <div className='form-box'>
                                <label className='form-label'>Email</label>
                                <input className='form-input' type="text" />
                            </div>

                            <div className='form-box'>
                                <label className='form-label'>Subject</label>
                                <input className='form-input' type="text" />
                            </div>

                            <div className='form-box'>
                                <label className='form-label'>Message</label>
                                <textarea className='form-input form-textarea' ></textarea>
                            </div>

                            <div className='form-btn'>
                                <button className='contact-btn' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BodyContact;