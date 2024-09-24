import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../DataProvider";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { PostData } from "../utils/PostData";

function Login() {

    const { setIsLoggedIn } = useContext(DataContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonStatus, setButtonDisabled] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const { error: errorParam } = useParams();

    useEffect(() => {
        if (errorParam) {
            if (errorParam === 'Successfully_Created_Account_Please_Login') {
                setSuccess('Account created successfully. Please login.');
                return;
            } else if (errorParam === 'Password_reset_successfully') {
                setSuccess('Password reset successfully. Please login.');
                return;
            }
            setError(errorParam.replace(/_/g, ' '));
        }
    }, [errorParam]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonDisabled(true);

        if (email === '' || password === '') {
            setError('Please fill in all fields');
            setButtonDisabled(false);
            return;
        }

        PostData('login.php', { "email": email, "password": password })
            .then((result) => {

                if (result.status === 'error') {
                    setError(result.message);
                    setButtonDisabled(false);
                    return;
                }

                const userData = result.data;
                sessionStorage.setItem('userData', JSON.stringify(userData));
                setIsLoggedIn(true);
                navigate('/dashboard');
            })
            .catch((error) => {
                setError(error.message);
                setButtonDisabled(false);
            });
    }

    return (
        <main>
            <center>
                <h1 className="mt-4">Admin Login</h1>
                <hr />
            </center>
            <center>
                <Form className="w-50">

                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onInput={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onInput={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button className="mb-2" variant="primary" type="submit" onClick={(e) => handleSubmit(e)} disabled={buttonStatus}>
                        Submit
                    </Button>
                </Form>
            </center>
        </main>
    );
}

export default Login;
