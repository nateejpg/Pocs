import React from 'react'
import { useState, useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        username: '',
    });

    const handleChange = (e) => {
        
        setUserInfo((prev) => ({...prev, [e.target.name]: e.target.value}));

        console.log(userInfo)
        
    }

    const navigate = useNavigate();

    const handleClick = async (e) => {
        
        e.preventDefault();

        try{
            await axios.post("http://localhost:8800/users", userInfo);
            navigate('/')
        }catch(err){
            console.log(err);
        }

        console.log(userInfo)
    }


  return (
    <div>
        <form className='auth'>
            <input type='text' placeholder='Enter your username' name = "username" onChange={handleChange}/>
            <input type='email' placeholder='Enter your email' name = "email" onChange={handleChange}/>
            <input type='password' placeholder='Enter your Password:' name = "password" onChange={handleChange}/>
            <button onClick={handleClick} type='submit'>Register</button>
            <Link to={"/login"}><h1>Already have an account?</h1></Link>
        </form>
    </div>
  )
}

export default Register