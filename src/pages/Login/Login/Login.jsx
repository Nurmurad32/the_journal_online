import  { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import "./Login.css"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const loginSection = {
    padding: "70px 50px",
    backgroundColor: "white",
    marginTop: "50px",
    marginBottom: "50px",
    borderRadius: "5px"
}

const Login = () => {
    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const [showError, setShowError] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    console.log('login page location', location)

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        setShowError("")

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setShowError(error.message);
            })
    }
    const handleGoogleLogin = () => {
        console.log("clicked");
        setShowError("")

        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setShowError(error.message);
            })
    }
    const handleGithubLogin = () => {
        console.log("clicked")
        setShowError("")

        gitHubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setShowError(error.message);
            })
    }
    return (
        <Container className='mx-auto' style={loginSection}>
            <Helmet>
                <title>Login || The Journal Online</title>
            </Helmet>
            <Row>
                <Col xs={1} sm={2} md={4}> </Col>
                <Col xs={10} sm={8} md={4}>
                    {showError &&
                        <p className='text-danger border border-danger p-2 text-center'>{showError}</p>
                    }
                    <h3 className='text-center border-bottom pb-4'>Login your account</h3>
                    <Form onSubmit={handleLogin} className='pt-4 login-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Enter your password" required />
                        </Form.Group>

                        <Button variant="dark" className='w-100' type="submit">
                            Login
                        </Button>
                        <br />
                        <p className='text-center mt-3'>or</p>
                        <div className='text-center mt-3 mb-5'>
                            <button onClick={handleGoogleLogin} className='me-3' style={{ backgroundColor: 'white', border: 'none' }}>
                                <FcGoogle style={{ height: "35px", width: "35px", cursor: "pointer" }} />
                            </button>
                            <button onClick={handleGithubLogin} style={{ backgroundColor: 'white', border: 'none' }}>
                                <FaGithub style={{ height: '30px', width: '30px' }}></FaGithub>
                            </button>
                        </div>

                        <p className="text-secondary text-center mb-5">
                            Don't have an Account?<Link to="/register" className='text-decoration-none'><span className='ms-2 brand-color text-danger'>Register</span></Link>
                        </p>
                        {/* <Form.Text className="text-secondary d-block text-center mt-3">
                            Don't Have an Account?<Link to="/register" className='text-danger text-decoration-none pl-2'>Register</Link>
                        </Form.Text> */}

                    </Form>
                    {/* <div className='text-center mt-3'>
                        <p className='text-secondary'>Or <br />Login With</p>
                        <p className='text-center'>
                            <FcGoogle className='me-3 fs-4 pe-auto' onClick={handleGoogleLogin} style={{ cursor: "pointer" }} />
                            <FaGithub className='me-3 fs-4 pe-auto' style={{ cursor: "pointer" }} onClick={handleGithubLogin} />
                        </p>
                    </div> */}
                </Col>
                <Col xs={1} sm={2} md={4}> </Col>
            </Row>
        </Container>
    );
};

export default Login;