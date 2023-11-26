import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import "./Register.css"
import useTitle from '../../../hook/useTitle';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const registerSection = {
    padding: "70px 50px",
    backgroundColor: "white",
    marginTop: "50px",
    marginBottom: "50px",
    borderRadius: "5px"
}


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);
    const [showError, setShowError] = useState();

    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        setShowError("")

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)



        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUserProfile(name, photo)
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        console.log(error);
                    });
                toast.success('Account Created Successfully');
                console.log(createdUser)
                form.reset();
                navigate("/")
            })
            .catch(error => {
                console.log(error);
                setShowError(error.message);
            })
    }

    const handleCheck = event => {
        setAccept(event.target.checked)
    }
    return (
        <Container className='mx-auto' style={registerSection}>
            <Helmet>
                <title>Register || The Journal Online</title>
            </Helmet>
            <Row>
                <Col xs={1} sm={2} md={4}> </Col>
                <Col xs={10} sm={8} md={4}>
                    {showError &&
                        <p className='text-danger border border-danger p-2 text-center'>{showError}</p>
                    }
                    <h3 className='text-center border-bottom pb-4'>Register your account</h3>
                    <Form onSubmit={handleRegister} className='pt-4 reg-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name="photo" placeholder="Enter your Photo URL" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Enter your Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={handleCheck}
                                type="checkbox"
                                name="accept"
                                label={<>Accept <Link to="/terms">Terms and Condition</Link></>} />
                        </Form.Group>
                        <Button variant="dark" className='w-100' type="submit" disabled={!accept}>
                            Register
                        </Button>
                        <br />
                        <p className='text-center mt-3'>or</p>
                        <Form.Text className="text-secondary d-block text-center mt-3">
                            Already have an Account?<Link to="/login" className='text-danger text-decoration-none ml-2'>Login</Link>
                        </Form.Text>
                        <Form.Text className="text-success">

                        </Form.Text>
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Col>
                <Col xs={1} sm={2} md={4}> </Col>
            </Row>
        </Container>
    );
};

export default Register;