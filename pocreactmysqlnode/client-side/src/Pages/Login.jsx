import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8800/login', userInfo);
            console.log('Login successful:', res.data);
            // Redirect to dashboard or next page on successful login
            navigate('/');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                console.log('Login failed:', err.response.data.error);
                // Handle specific error cases, such as displaying an error message to the user
            } else {
                console.log('An error occurred:', err.message);
                // Handle other error cases, such as network errors
            }
        }
    };

    return (
        <div>
            <form className='auth' onSubmit={handleSubmit}>
                <input type='email' placeholder='Enter your Email:' name='email' onChange={handleChange} />
                <input type='password' placeholder='Enter your Password:' name='password' onChange={handleChange} />
                <button type='submit'>Login</button>
                <Link to='/register'>Don't have an account?</Link>
            </form>
        </div>
    );
};

export default Login;