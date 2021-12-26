import React from 'react';
import BodyResume from '../components/BodyResume';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Resume = () => {
    return (
        <React.Fragment>
            <Header />
            <BodyResume />
            <Footer />
        </React.Fragment>
    );
}
 
export default Resume;