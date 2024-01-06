import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import apiRequest from './apiRequest';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

const Login = ({API_URL}) => {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [LoginError, setLoginError] = useState(false);
    const [SignedUp, setSignedUp] = useState(false);


    const auth = useAuth();

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    const handleLogin = async () => {

        const loginInfo = {
            username: userName,
            password: password
        }
        const templatedData = `${API_URL}/login`;
        const postOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
          }

        const result = await apiRequest(templatedData, postOptions);
        if (!result.ok) setLoginError(true);
        else {
            const User = await result.json();
            auth.login(User);
            navigate('/');
        }
    }


    const handleSignup = async () => {
        const signupInfo = {
            username: userName,
            password: password
        }
        const templatedData = `${API_URL}/signup`;
        const postOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupInfo)
          }

        const result = await apiRequest(templatedData, postOptions);
        if (result.ok) setSignedUp(true);
    }

    return (
        <div className="Login_Container">
            <div className="text-center center-div">
                <div className="container w-25 border py-5" id="login-form" style={{ display: showLoginForm ? 'block' : 'none' }}>
                    <div className="title pb-5">
                        <h2 className="font-weight-bold">Login</h2>
                        <span>
                            Login for registered account/ <a className='SwitchButton' onClick={toggleForm}>Signup</a>
                        </span>
                        {LoginError && (<span>Incorrect username or password!</span>)}
                    </div>
                    <form method="post">
                        <div className="form-group">
                            <input type="email" className="form-control mt-1" placeholder="Email" name="email" onChange={(e) =>setUserName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control mt-3" placeholder="Password" name="password" onChange={(e) =>setPassword(e.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3" onClick={handleLogin}>
                            Submit
                        </button>
                    </form>
                </div>

                <div className={`container w-25 border py-5 ${showLoginForm ? 'visually-hidden' : ''}`} id="signup-form">
                    <div className="title pb-5">
                        <h2 className="font-weight-bold">Signup</h2>
                        <span>
                            Already have an account/ <a className='SwitchButton' onClick={toggleForm}>Login</a>
                        </span>
                        {SignedUp && (<span>Account registered!</span>)}
                    </div>
                    <form method="post">
                        <div className="form-group">
                            <input type="email" className="form-control mt-1" placeholder="Email" name="email" onChange={(e) =>setUserName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control mt-3" placeholder="Password" name="password" onChange={(e) =>setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" onClick={handleSignup}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
