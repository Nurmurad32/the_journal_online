import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';


const LoginLayout = () => {
    const footerStyle = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3"
    }
    return (
        <div style={footerStyle}>
            <NavigationBar></NavigationBar>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;