import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import "./LeftNav.css"
import bg from '../../../assets/bg.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='sticky-class phone-cat'>
            <div>
                <h2 className='leftNavTitle text-center bg-white mb-3' >All Category</h2>
            </div>
            <div className='ps-4 leftNav' style={{backgroundColor: "rgb(66 70 73 / 77%)", marginBottom: "25px", padding:"10px"}} >
                {
                    categories.map(category => <p
                        className='leftNavStyle'
                        key={category.id}
                    >
                        <ActiveLink to={`/category/${category.id}`} className=' text-black text-decoration-none'>{category.name}</ActiveLink>
                    </p>)
                }
            </div>


            {/* <div style={{ height: "500px", width: "auto", position: "relative" }} className='mt-5 '>
                <img className='img-fluid' src={bg} alt="" style={{ height: "500px" }} />
                <div style={{
                    position: "absolute",
                    top: "45px",
                    color: "white",
                    padding: "5%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "86%",
                    justifyContent: "center"
                }}>
                    <h2 className='text-center'>Create an Amazing Newspaper</h2>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='p-3 btn btn-danger'>Learn More</button>
                </div>
            </div> */}

        </div>
    );
};

export default LeftNav;