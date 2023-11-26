import React from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'

const QZone = () => {
    return (
        <div>
            <div style={{ background: "#F3F3F3" }}>
                <img className='img-fluid' src={qZone1} alt="" />
                <img className='img-fluid' src={qZone2} alt="" />
                <img className='img-fluid' src={qZone3} alt="" />
            </div>
            <div style={{height:"500px", width:"auto", position: "relative" }} className='mt-3'>
                <img className='img-fluid' src={bg} alt="" style={{height:"500px"}}/>
                <div style={{
                    position: "absolute",
                    top: "45px",
                    color: "white",
                    padding:"10%"
                }}>
                    <h2>Create an Amazing Newspaper</h2>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='p-3 btn btn-danger'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default QZone;