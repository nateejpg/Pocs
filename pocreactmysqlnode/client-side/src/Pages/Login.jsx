import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({onLogin}) => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const [user, setUser] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8800/login', userInfo);
            console.log('Login successful:', res.data);

            // Setting the user from the database to a state / local variable
            setUser(res.data.user.username);

            onLogin(res.data.user.username);

            console.log(user);

             navigate('/');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                console.log('Login failed:', err.response.data.error);
            } else {
                console.log('An error occurred:', err.message);
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
                <h1>{user}</h1>

            </form>
        </div>
    );
};

export default Login;