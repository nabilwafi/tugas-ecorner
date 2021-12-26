import React from 'react';
import './BodyContact.css';

const BodyContact = () => {
    return (
        <div className='container-contact'>
            <div className='contacts'>
                <div className='contact-description'>
                    <h1 className='contact-title'>Contact</h1>
                    <p className='contact-subtitle'>Looking forward to hearing from you</p>

                    <div className='contact-self-desc'>
                        <div className='contact-box'>
                            <h5 className='contact-box-title'>Phone</h5>
                            <p className='contact-box-text'>123-456-7890</p>
                        </div>

                        <div className='contact-box'>
                            <h5 className='contact-box-title'>Email</h5>
                            <p className='contact-box-text'>info@mysite.com</p>
                        </div>
                    </div>
                </div>

                <div className='form'>
                    <form className='contact-form'>
                        <div className='contact-box-form'>
                            <div className='contact-form-box'>
                                <label className='contact-form-label'>First Name</label>
                                <input className='contact-form-input' />
                            </div>

                            <div className='contact-form-box'>
                                <label className='contact-form-label'>Last Name</label>
                                <input className='contact-form-input' />
                            </div>
                        </div>

                        <div className='contact-box-form'>
                            <div className='contact-form-box'>
                                <label className='contact-form-label'>Email</label>
                                <input className='contact-form-input' />
                            </div>

                            <div className='contact-form-box'>
                                <label className='contact-form-label'>Subject</label>
                                <input className='contact-form-input' />
                            </div>
                        </div>

                        <div className='contact-box-form'>
                            <div className='contact-form-box'>
                                <label className='contact-form-label'>Message</label>
                                <textarea className='contact-form-input contact-form-textarea'></textarea>
                            </div>

                            <div className='btn resume'>
                                <a className='btn-link'>Submit</a>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
}

export default BodyContact;