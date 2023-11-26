import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-50 d-flex flex-column justify-content-center align-items-center' style={{margin:"0 auto"}}>
            <Helmet>
                <title>Terms & Condition || The Journal Online</title>
            </Helmet>
            <h2 className='text-center'>Terms & Conditions</h2>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum a perferendis accusantium tempore numquam consequatur veniam, ipsam modi! Ea ducimus quis beatae accusamus ratione, asperiores cumque temporibus nam dolorum quam sint aspernatur odit. Magnam cupiditate asperiores ea at vitae laborum consequuntur, quibusdam saepe deleniti culpa optio dolorum exercitationem inventore perspiciatis!</p>
            <button className='btn btn-danger text-center w-50'><Link to={"/register"} className='text-decoration-none text-white'>Back to register</Link></button>
        </div>
    );
};

export default Terms;