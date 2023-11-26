import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import './RightNav.css'

import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RightNav = () => {
    const { googleSignIn, gitHubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/category/0";

    const handleGoogleLogin = () => {
        console.log("clicked");
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubLogin = () => {
        gitHubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className='login-with-section'>
                <h4>Login With</h4>
                <Button className='login-btn' variant="outline-info" onClick={handleGoogleLogin}><FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='login-btn' variant="outline-dark" onClick={handleGithubLogin}><FaGithub></FaGithub> Login with GitHub</Button>
            </div>
            <div className='Find-us-section'>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='find-social-icon'></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='find-social-icon'></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='find-social-icon'></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='qZones-section'>
                <h3>Q-Zone</h3>
                <div className='qZones'>
                    <QZone ></QZone>
                </div>
            </div>

        </div>
    );
};

export default RightNav;