import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark mb-0'>
            <small><Link to={"/terms"} className='text-decoration-none d-flex justify-content-center mb-0 py-2 text-secondary' style={{cursor:"pointer"}}>~Terms & Condition</Link></small>
            <small className='mb-0 pt-0 p-3 text-white d-flex justify-content-center text-center'>© 2023 THE JOURNAL ONLINE | Powered by: MD NUR-A-ALAM KHAN</small>
        </div>
    );
};

export default Footer;