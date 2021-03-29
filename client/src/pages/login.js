import React, { Fragment, useContext, useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../responsiveCss/registerLogin.css';
import { loginFunction } from '../queries/users/login';
/*
Stranka pro prihlaseni uzivatele
handleLogin prihlasi uzivatele
*/
function Login() {
    let btnRef = useRef();
    const source = useRef(axios.CancelToken.source());
    const [loginErrors, setLoginErrors] = useState(null);
    useEffect(() => {
        const cancelToken = source.current;
        return () => {
            cancelToken.cancel();
        }
    }, []);
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    const { register, handleSubmit, errors } = useForm();
    const { loginUser } = useContext(AuthContext);
    async function handleLogin(data) {
        if (btnRef.current) {
            btnRef.current.setAttribute("disabled", "disabled");
        }
        const { email, password } = data;
        await loginFunction(btnRef, setLoginErrors, loginUser, email, password, source.current);
    }
    return (
        <Fragment>
            <div className='firstCenterDiv'>
                <div className='secondCenterDiv'>
                    <Form onSubmit={handleSubmit(handleLogin)}>
                        {loginErrors && (
                            <Form.Text className="helperText">{loginErrors}</Form.Text>
                        )}
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control autoComplete="on"
                                name='email'
                                type="email"
                                placeholder="Enter email"
                                ref={register({
                                    pattern: regEx,
                                    required: true
                                })} />
                            {errors.email && errors.email.type === "pattern" && (
                                <Form.Text className="helperText">Email has to be valid!</Form.Text>
                            )}
                            {errors.email && errors.email.type === "required" && (
                                <Form.Text className="helperText">Email is empty!</Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control autoComplete="off"
                                name='password'
                                type="password"
                                placeholder="Password"
                                ref={register({
                                    required: true,
                                    minLength: 8
                                })} />
                            {errors.password && errors.password.type === "required" && (
                                <Form.Text className="helperText">Password is empty!</Form.Text>
                            )}
                            {errors.password && errors.password.type === "minLength" && (
                                <Form.Text className="helperText">Password has to be atleast 8 chars long!</Form.Text>
                            )}
                        </Form.Group>
                        <Button type='submit' ref={btnRef} onClick={() => {
                            setLoginErrors(null)
                        }} >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;